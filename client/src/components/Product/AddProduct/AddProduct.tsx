import { useState } from 'react'
import './addproduct.scss'

export const AddProduct = () => {
    const [image, setImage] = useState<string>('')

    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files: FileList | null = e.target.files
        console.log(files)
        if (files) {
            const url = URL.createObjectURL(files[0])
            setImage(url)
        }

    }
    return (
        <div>
            <h1>Add Product</h1>
            <div className='product-form'>
                <label htmlFor='productName'>Product Name</label>
                <input type="text" id="productName" placeholder="product name" />
                <label htmlFor='productBrand'>Product Brand</label>
                <input type='text' id='productBrand' placeholder="Product brand" />
                <label htmlFor="productCategory">Product Category</label>
                <select id="productCategory">
                    <option selected disabled hidden>Please Select</option>
                    <option>Clothing</option>
                    <option>Sports</option>
                    <option>Fitness</option>
                    <option>Grocery</option>
                    <option>Electronics</option>
                    <option>Furniture</option>
                </select>
                <div >
                    <img src={image} alt="product image" className='product-img' />
                    <label htmlFor="productImage">Add Product Image</label>
                    <input type="file" id='productImage' accept="image/*" className="product-img-file" onChange={handleImage} />
                </div>
                <label htmlFor='prodectDescription'>Product Description</label>
                <textarea id='productDescription' />
                <label htmlFor='stockQuantity'>Stock Quantity</label>
                <input type='number' id='stockQuantity' />
                <label htmlFor='productPrice'>Product Price</label>
                <input type='number' id='productPrice' />
                <button>Add Product</button>
            </div>
        </div>
    )
}
