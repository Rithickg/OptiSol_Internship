import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from "cors"
import mongoose, { ConnectOptions } from 'mongoose'
import userRoute from './routes/user'
import productRoute from './routes/product'
import { authVerify } from './utils/jwtUtils'
// import { verifyToken } from './utils/jwtUtils'

dotenv.config()


const app: Express = express()
app.use(express.json())
app.use(cors())
app.use(express.static('public'))

const mongo_url: string = process.env.MONGO_URL!

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect(mongo_url, options as ConnectOptions)
    .then(() => {
        console.log('Connected to the database');
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error)
    })


const port = process.env.PORT
// app.use(verifyToken)
app.use('/api', userRoute);
app.use('/api', authVerify, productRoute);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
})