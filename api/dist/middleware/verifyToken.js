"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwtUtils_1 = require("../utils/jwtUtils");
const verifyToken = (req, res, next) => {
    const { id } = req.body._id;
    const userId = (0, jwtUtils_1.getUserIdFromRequest)(req);
    if (userId) {
        id == userId;
        next();
    }
    else {
        res.status(401).json({ message: 'Unathorized' });
    }
};
