import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as userRepository from '../repositories/userRepository';
import User from '../models/user';

// POST /api/users/register
export const registerUser = async (email: string, password: string, displayName: string): Promise<User> => {
    const existing = await userRepository.findUserByEmail(email);
    if (existing) throw new Error('Email already in use');

    const hashedPassword = await bcrypt.hash(password, 10);
    return await userRepository.createUser(email, hashedPassword, displayName);
};

// POST /api/users/login
export const loginUser = async (email: string, password: string): Promise<string> => {
    const user = await userRepository.findUserByEmail(email);
    if (!user) throw new Error('User not found');

    const valid = await bcrypt.compare(password, user.hashedPassword);
    if (!valid) throw new Error('Invalid password');

    const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET as string,
        { expiresIn: '75d'}
    );

    return token;
};

// GET /api/users/:id
export const getUserById = async (id: number): Promise<User | null> => {
    const user = await userRepository.findUserById(id);
    if (!user) throw new Error('User not found');
    return user;
};

// PUT /api/users/:id
export const updateUser = async (id: number, updates: Partial<User>): Promise<User | null> => {
    return await userRepository.updateUser(id, updates);
};

// DELETE /api/users/:id
export const deleteUser = async (id: number): Promise<boolean> => {
    return await userRepository.deleteUser(id);
};