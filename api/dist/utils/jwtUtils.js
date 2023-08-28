"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authVerify = exports.getUserIdFromRequest = exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateToken = (userId) => {
    return jsonwebtoken_1.default.sign({ userId }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
};
exports.generateToken = generateToken;
const verifyToken = (token) => {
    try {
        return jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET_KEY);
    }
    catch (error) {
        throw new Error("Invalid token");
    }
};
exports.verifyToken = verifyToken;
// Not Used
const getUserIdFromRequest = (req) => {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split('')[1];
    if (token) {
        const decodedToken = (0, exports.verifyToken)(token);
        return decodedToken.userId;
    }
    return null;
};
exports.getUserIdFromRequest = getUserIdFromRequest;
const authVerify = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).json("No authorized token found, Access Denied !");
    }
    try {
        const verify = (0, exports.verifyToken)(token);
        // userId is not sent from frontend
        // req.userId =verify.userId
        // console.log(verify)
        next();
    }
    catch (error) {
        res.status(400).json("Invalied Token");
    }
};
exports.authVerify = authVerify;
