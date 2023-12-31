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
const Product_1 = __importDefault(require("../models/Product"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const router = express_1.default.Router();
const storage = multer_1.default.diskStorage({
    destination: 'public/products',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path_1.default.extname(file.originalname));
    }
});
const upload = (0, multer_1.default)({
    storage: storage
});
router.post('/add-product', upload.single('file'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    console.log(req.file);
    const imageUrl = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
    const { name, brand, category, description, stockQuantity, price } = req.body;
    console.log(name, brand, category, imageUrl, description, stockQuantity, price);
    try {
        const newProduct = new Product_1.default({
            name,
            brand,
            category,
            imageUrl,
            description,
            stockQuantity,
            price
        });
        const savedProduct = yield newProduct.save();
        res.status(200).json({ Product: savedProduct, message: 'Product added' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding the product' });
    }
}));
router.get('/view-product', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield Product_1.default.find();
        res.status(200).json({ Products: products, message: 'All products' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error finding the product' });
    }
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const product = yield Product_1.default.findById(id);
        res.status(200).json({ Product: product, message: 'Product Found' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error finding the product' });
    }
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const product = yield Product_1.default.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        res.status(200).json({ Product: product, message: 'Product updated' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating the product' });
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield Product_1.default.findByIdAndDelete(id);
        res.status(200).json({ message: 'Product deleted' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting the product' });
    }
}));
exports.default = router;
