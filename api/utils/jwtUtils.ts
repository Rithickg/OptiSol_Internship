import { Request } from 'express';
import jwt from 'jsonwebtoken'


export const generateToken = (userId: string): string => {
    return jwt.sign({ userId }, process.env.JWT_SECRET_KEY!, { expiresIn: '1h' });
};

export const verifyToken = (token: string): string | object => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET_KEY!)
    } catch (error) {
        throw new Error("Invalid token");
    }
}

export const getUserIdFromRequest = (req: Request): string | null => {
    const token = req.headers.authorization?.split('')[1];
    if (token) {
        const decodedToken = verifyToken(token);
        return (decodedToken as { userId: string }).userId;
    }
    return null;
}
