import mongoose, { Schema } from "mongoose";
export interface UserTypes {
    fullName: string,
    email: string,
    mobileNumber: number,
    password: string
}

const UserSchema: Schema<UserTypes> = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobileNumber: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })


export default mongoose.model("User", UserSchema)