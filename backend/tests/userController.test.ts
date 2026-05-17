import * as userController from "../src/controllers/userController";

import User from "../src/models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const mockRequest = (body = {}, params = {}) =>
  ({ body, params }) as any;

const mockResponse = () => {
  const res: any = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
};

afterEach(() => {
  jest.restoreAllMocks();
});

describe("User Controller - register", () => {
  it("registers a new user", async () => {
    const req = mockRequest({
      email: "test@test.com",
      password: "password123",
      displayName: "Test User",
    });

    const res = mockResponse();

    jest.spyOn(User, "findOne").mockResolvedValue(null);

    jest
      .spyOn(bcrypt, "hash")
      .mockResolvedValue("hashedPassword" as never);

    jest.spyOn(User, "create").mockResolvedValue({
      id: 1,
      email: "test@test.com",
      displayName: "Test User",
    } as any);

    await userController.register(req, res);

    expect(User.findOne).toHaveBeenCalledWith({
      where: { email: "test@test.com" },
    });

    expect(bcrypt.hash).toHaveBeenCalledWith(
      "password123",
      10
    );

    expect(User.create).toHaveBeenCalledWith({
      email: "test@test.com",
      hashedPassword: "hashedPassword",
      displayName: "Test User",
    });

    expect(res.status).toHaveBeenCalledWith(201);

    expect(res.json).toHaveBeenCalledWith({
      email: "test@test.com",
      displayName: "Test User",
    });
  });

  it("rejects short passwords", async () => {
    const req = mockRequest({
      email: "test@test.com",
      password: "123",
      displayName: "Test User",
    });

    const res = mockResponse();

    await userController.register(req, res);

    expect(res.status).toHaveBeenCalledWith(400);

    expect(res.json).toHaveBeenCalledWith({
      error: {
        message: "Password must be at least 8 characters.",
      },
    });
  });

  it("rejects duplicate emails", async () => {
    const req = mockRequest({
      email: "test@test.com",
      password: "password123",
      displayName: "Test User",
    });

    const res = mockResponse();

    jest.spyOn(User, "findOne").mockResolvedValue({
      id: 1,
    } as any);

    await userController.register(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
  });

  it("handles register errors", async () => {
    const req = mockRequest({
      email: "test@test.com",
      password: "password123",
      displayName: "Test User",
    });

    const res = mockResponse();

    jest
      .spyOn(User, "findOne")
      .mockRejectedValue(new Error("DB failure"));

    await userController.register(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
  });
});

describe("User Controller - login", () => {
  it("logs in a valid user", async () => {
    process.env.JWT_SECRET = "testsecret";

    const req = mockRequest({
      email: "test@test.com",
      password: "password123",
    });

    const res = mockResponse();

    const fakeUser = {
      id: 1,
      email: "test@test.com",
      displayName: "Test User",
      hashedPassword: "hashedPassword",
    };

    jest
      .spyOn(User, "findOne")
      .mockResolvedValue(fakeUser as any);

    jest
      .spyOn(bcrypt, "compare")
      .mockResolvedValue(true as never);

    jest
      .spyOn(jwt, "sign")
      .mockReturnValue("fake-jwt-token" as never);

    await userController.login(req, res);

    expect(User.findOne).toHaveBeenCalledWith({
      where: { email: "test@test.com" },
    });

    expect(bcrypt.compare).toHaveBeenCalledWith(
      "password123",
      "hashedPassword"
    );

    expect(jwt.sign).toHaveBeenCalled();

    expect(res.status).toHaveBeenCalledWith(200);

    expect(res.json).toHaveBeenCalledWith(
      "fake-jwt-token"
    );
  });

  it("rejects invalid email", async () => {
    const req = mockRequest({
      email: "bad@test.com",
      password: "password123",
    });

    const res = mockResponse();

    jest.spyOn(User, "findOne").mockResolvedValue(null);

    await userController.login(req, res);

    expect(res.status).toHaveBeenCalledWith(401);

    expect(res.json).toHaveBeenCalledWith({
      message: "Invalid user credentials",
    });
  });

  it("rejects invalid password", async () => {
    const req = mockRequest({
      email: "test@test.com",
      password: "wrongpassword",
    });

    const res = mockResponse();

    jest.spyOn(User, "findOne").mockResolvedValue({
      hashedPassword: "hashedPassword",
    } as any);

    jest
      .spyOn(bcrypt, "compare")
      .mockResolvedValue(false as never);

    await userController.login(req, res);

    expect(res.status).toHaveBeenCalledWith(401);

    expect(res.json).toHaveBeenCalledWith({
      message: "Invalid user credentials",
    });
  });

  it("handles login errors", async () => {
    const req = mockRequest({
      email: "test@test.com",
      password: "password123",
    });

    const res = mockResponse();

    jest
      .spyOn(User, "findOne")
      .mockRejectedValue(new Error("DB failure"));

    await userController.login(req, res);

    expect(res.status).toHaveBeenCalledWith(500);

    expect(res.json).toHaveBeenCalledWith({
      message: "An error has occurred.",
    });
  });
});

describe("User Controller - getUser", () => {
  it("returns a user", async () => {
    const req = mockRequest({}, { id: "1" });

    const res = mockResponse();

    const fakeUser = {
      id: 1,
      email: "test@test.com",
    };

    jest
      .spyOn(User, "findByPk")
      .mockResolvedValue(fakeUser as any);

    await userController.getUser(req, res);

    expect(User.findByPk).toHaveBeenCalledWith(1);

    expect(res.status).toHaveBeenCalledWith(200);

    expect(res.json).toHaveBeenCalledWith(fakeUser);
  });

  it("handles missing user", async () => {
    const req = mockRequest({}, { id: "1" });

    const res = mockResponse();

    jest.spyOn(User, "findByPk").mockResolvedValue(null);

    await userController.getUser(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
  });
});

describe("User Controller - updateUser", () => {
  it("updates a user", async () => {
    const req = mockRequest(
      {
        displayName: "Updated User",
      },
      { id: "1" }
    );

    const res = mockResponse();

    const mockUpdate = jest.fn();

    jest.spyOn(User, "findByPk").mockResolvedValue({
      email: "test@test.com",
      update: mockUpdate,
    } as any);

    await userController.updateUser(req, res);

    expect(mockUpdate).toHaveBeenCalledWith({
      displayName: "Updated User",
    });

    expect(res.status).toHaveBeenCalledWith(200);

    expect(res.json).toHaveBeenCalledWith(
      "test@test.com"
    );
  });

  it("handles updateUser errors", async () => {
    const req = mockRequest({}, { id: "1" });

    const res = mockResponse();

    jest
      .spyOn(User, "findByPk")
      .mockRejectedValue(new Error("Update failed"));

    await userController.updateUser(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
  });
});

describe("User Controller - deleteUser", () => {
  it("deletes a user", async () => {
    const req = mockRequest({}, { id: "1" });

    const res = mockResponse();

    const mockDestroy = jest.fn();

    jest.spyOn(User, "findByPk").mockResolvedValue({
      destroy: mockDestroy,
    } as any);

    await userController.deleteUser(req, res);

    expect(mockDestroy).toHaveBeenCalled();

    expect(res.status).toHaveBeenCalledWith(200);

    expect(res.json).toHaveBeenCalledWith({
      message: "User deleted successfully",
    });
  });

  it("handles deleteUser errors", async () => {
    const req = mockRequest({}, { id: "1" });

    const res = mockResponse();

    jest
      .spyOn(User, "findByPk")
      .mockRejectedValue(new Error("Delete failed"));

    await userController.deleteUser(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
  });
});
