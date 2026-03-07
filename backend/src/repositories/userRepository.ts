import User from '../models/user';

// Create a new user
export const createUser = async (email: string, hashedPassword: string, displayName: string): Promise<User> => {
    return await User.create({ email, hashedPassword, displayName });
};

// Find a user by their ID
export const findUserById = async (id: number): Promise<User | null> => {
    return await User.findByPk(id);
};

// Find a user by their email
export const findUserByEmail = async (email: string): Promise<User | null> => {
    return await User.findOne({ where: { email } });
};

// Update a user
export const updateUser = async (id: number, updates: Partial<User>): Promise<User | null> => {
    const user = await User.findByPk(id);
    if (!user) return null;
    return await user.update(updates);
};

// Delete a user
export const deleteUser = async (id: number): Promise<boolean> => {
    const user = await User.findByPk(id);
    if (!user) return false;
    await user.destroy();
    return true;
};
