import mongoose, { Schema } from "mongoose";

interface ProductTypes {
    productName: string,
    productBrand: string,
    productCategory: string,
    productImageUrl: string,
    productDescription: string,
    stockQuantity: number,
    productPrice: number
}

const ProductSchema: Schema<ProductTypes> = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productBrand: {
        type: String,
        required: true
    },
    productCategory: {
        type: String,
        required: true
    },
    productImageUrl: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    stockQuantity: {
        type: Number,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model("Product", ProductSchema)