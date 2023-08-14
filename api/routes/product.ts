import express, { Request, Response } from 'express'
import Product from '../models/Product'
import { ProductTypes } from '../models/Product'

const router = express.Router()

router.post('/add-product', async (req: Request, res: Response) => {
    const { name, brand, category, imageUrl, description, stockQuantity, price }: ProductTypes = req.body
    try {
        const newProduct = new Product({
            name,
            brand,
            category,
            imageUrl,
            description,
            stockQuantity,
            price
        })
        const savedProduct = await newProduct.save();
        res.status(200).json({ Product: savedProduct, message: 'Product added' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding the product' })
    }
})

router.get('/view-product', async (req: Request, res: Response) => {
    try {
        const products = await Product.find()
        res.status(200).json({ Products: products, message: 'All products' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error finding the product' })
    }
})

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        res.status(200).json({ Product: product, message: 'Product Found' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error finding the product' })
    }

})

router.put('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        res.status(200).json({ Product: product, message: 'Product updated' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating the product' })
    }
})

router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        await Product.findByIdAndDelete(id)
        res.status(200).json({ message: 'Product deleted' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting the product' })
    }
})


export default router;