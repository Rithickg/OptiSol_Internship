"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = __importDefault(require("../models/User"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwtUtils_1 = require("../utils/jwtUtils");
const router = express_1.default.Router();
router.post('/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { password } = req.body;
    try {
        const salt = yield bcrypt_1.default.genSalt(15);
        const hashedPass = yield bcrypt_1.default.hash(password, salt);
        const newUser = new User_1.default({
            fullName: req.body.fullName,
            email: req.body.email,
            mobileNumber: req.body.mobileNumber,
            password: hashedPass
        });
        const savedUser = yield newUser.save();
        const token = (0, jwtUtils_1.generateToken)(savedUser._id.toString());
        res.status(200).json({ User: savedUser, Token: token });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error signing up' });
    }
}));
router.post('/signin', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield User_1.default.findOne({ email });
        if (!user) {
            res.status(401).json({ message: "Invalid Credentials" });
            return;
        }
        if (user) {
            const validPass = yield bcrypt_1.default.compare(password, user.password);
            if (!validPass) {
                return res.status(401).json({ message: "Invalid Password" });
            }
            const token = (0, jwtUtils_1.generateToken)(user._id.toString());
            res.json({ User: user, Token: token });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error signing in' });
    }
}));
exports.default = router;
