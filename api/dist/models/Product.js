"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ProductSchema = new mongoose_1.default.Schema({
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
}, { timestamps: true });
module.exports = mongoose_1.default.model("Product", ProductSchema);
