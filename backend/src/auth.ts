import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import express from "express";
import { getUserByEmail, createUser } from './Repository/userRepository';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

export const signup = async (req: express.Request, res: express.Response) => {

    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const existingUser = await getUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await createUser(username, email, hashedPassword);

        const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET_KEY as string, { expiresIn: '1h' });
        res.status(201).json({ "token" : token });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const signin = async (req: express.Request, res: express.Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const user = await getUserByEmail(email);
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.passwordhash);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY as string, { expiresIn: '1h' });
        return res.status(200).json({"token" :  token });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
