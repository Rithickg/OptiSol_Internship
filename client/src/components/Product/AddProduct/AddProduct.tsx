import { useState } from 'react'
import './addproduct.scss'
import axios from 'axios'

export const AddProduct = () => {
    const [image, setImage] = useState<string>('')
    const [product, setProduct] = useState<object>({
        productName: '',
        productBrand: '',
        productCategory: '',
        productImage: '',
        productDescription: '',
        stockQuantity: '',
        productPrice: '',

    })

    const handleImageFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files: FileList | null = e.target.files
        console.log(files)
        if (files) {
            const formData = new FormData()
            formData.append('file', files[0])
            console.log('formdata', formData)
            const img = "dfs"
            setProduct({ ...product, productImage: img })

            const url = URL.createObjectURL(files[0])
            // setProduct({ ...product, productImage: files[0] })
            setImage(url)
        }
    }

    const handleSubmit = async () => {
        console.log("product", product)
        try {
            const res = await axios.post('http://localhost:2002/api/add-product', {
                product
            })
            console.log(res)
        } catch (error) {
            console.error(error)
        }

    }
    return (
        <div>
            <h1>Add Product</h1>
            <div className='product-form'>
                <label htmlFor='productName'>Product Name</label>
                <input type="text" id="productName" placeholder="product name" onChange={e => setProduct({ ...product, productName: e.target.value })} />
                <label htmlFor='productBrand'>Product Brand</label>
                <input type='text' id='productBrand' placeholder="Product brand" onChange={e => setProduct({ ...product, productBrand: e.target.value })} />
                <label htmlFor="productCategory">Product Category</label>
                <select id="productCategory" onChange={e => setProduct({ ...product, productCategory: e.target.value })}>
                    <option selected disabled hidden>Please Select</option>
                    <option>Clothing</option>
                    <option>Sports</option>
                    <option>Fitness</option>
                    <option>Grocery</option>
                    <option>Electronics</option>
                    <option>Furniture</option>
                </select>
                <div>
                    <img src={image} alt="product image" className='product-img' />
                    <label htmlFor="productImage">Add Product Image</label>
                    <input type="file" id='productImage' accept="image/*" className="product-img-file" onChange={handleImageFile} />
                </div>
                <label htmlFor='prodectDescription'>Product Description</label>
                <textarea id='productDescription' onChange={e => setProduct({ ...product, productDescription: e.target.value })} />
                <label htmlFor='stockQuantity'>Stock Quantity</label>
                <input type='number' id='stockQuantity' onChange={e => setProduct({ ...product, stockQuantity: e.target.value })} />
                <label htmlFor='productPrice'>Product Price</label>
                <input type='number' id='productPrice' onChange={e => setProduct({ ...product, productPrice: e.target.value })} />
                <button onClick={handleSubmit}>Add Product</button>
            </div>
        </div>
    )
}
