import { Request, Response, NextFunction } from "express"
import { getUserIdFromRequest } from "../utils/jwtUtils"

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.body._id
    const userId = getUserIdFromRequest(req);
    if (userId) {
        id == userId;
        next()
    } else {
        res.status(401).json({ message: 'Unathorized' })
    }
}

