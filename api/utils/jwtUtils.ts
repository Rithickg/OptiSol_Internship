import { NextFunction, Request, Response } from 'express';
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

// Not Used
export const getUserIdFromRequest = (req: Request): string | null => {
    const token = req.headers.authorization?.split('')[1];
    if (token) {
        const decodedToken = verifyToken(token);
        return (decodedToken as { userId: string }).userId;
    }
    return null;
}

export const authVerify = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('auth-token')
    if (!token) {
        return res.status(401).json("No authorized token found, Access Denied !")
    }
    try {
        const verify = verifyToken(token)
        // userId is not sent from frontend
        // req.userId =verify.userId
        // console.log(verify)
        next()

    } catch (error) {
        res.status(400).json("Invalied Token")
    }
}