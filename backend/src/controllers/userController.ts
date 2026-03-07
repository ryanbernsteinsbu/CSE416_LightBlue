// Used AI for syntax help

import { Request, Response } from 'express';
import * as userService from '../services/userService';

// Register user
export const register = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password, displayName } = req.body;
        const user = await userService.registerUser(email, password, displayName);
        res.status(201).json({ 
            id: user.id, 
            email: user.email, 
            displayName: user.displayName 
        });
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};

// POST /api/users/login
export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;
        const token = await userService.loginUser(email, password);
        res.status(200).json({ token });
    } catch (err: any) {
        res.status(401).json({ error: err.message });
    }
};

// GET /api/users/:id
export const getUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await userService.getUserById(Number(req.params.id));
        res.status(200).json({ 
            id: user?.id, 
            email: user?.email, 
            displayName: user?.displayName 
        });
    } catch (err: any) {
        res.status(404).json({ error: err.message });
    }
};

// PUT /api/users/:id
export const updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await userService.updateUser(Number(req.params.id), req.body);
        res.status(200).json(user);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};

// DELETE /api/users/:id
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        await userService.deleteUser(Number(req.params.id));
        res.status(204).send();
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};