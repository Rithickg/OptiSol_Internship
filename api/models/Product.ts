import mongoose, { Schema } from "mongoose";

export interface ProductTypes {
    name: string,
    brand: string,
    category: string,
    imageUrl: string,
    description: string,
    stockQuantity: number,
    price: number
}

const ProductSchema: Schema<ProductTypes> = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    stockQuantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true })

export default mongoose.model("Product", ProductSchema)