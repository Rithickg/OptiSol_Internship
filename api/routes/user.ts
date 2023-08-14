import express, { Request, Response } from 'express'
import User from '../models/User'
import bcrypt from 'bcrypt'
import { generateToken } from '../utils/jwtUtils'
import { UserTypes } from '../models/User'

const router = express.Router()

router.post('/signup', async (req: Request, res: Response) => {
    const { fullName, email, mobileNumber, password }: UserTypes = req.body
    try {
        const salt = await bcrypt.genSalt(15);
        const hashedPass = await bcrypt.hash(password, salt);
        const newUser = new User({
            fullName,
            email,
            mobileNumber,
            password: hashedPass
        })
        const savedUser = await newUser.save();
        const token = generateToken(savedUser._id.toString())
        res.status(200).json({ User: savedUser, Token: token })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error signing up' })
    }
})

router.post('/signin', async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email })
        if (!user) {
            res.status(401).json({ message: "Invalid Credentials" });
            return;
        }

        if (user) {
            const validPass = await bcrypt.compare(password, user.password)
            if (!validPass) {
                return res.status(401).json({ message: "Invalid Password" })
            }
            const token = generateToken(user._id.toString())
            res.json({ User: user, Token: token });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error signing in' })
    }
})


export default router;