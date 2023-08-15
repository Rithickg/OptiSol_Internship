import { useState } from 'react'
import './addproduct.scss'
import axios from 'axios'

export const AddProduct = () => {
    const [image, setImage] = useState<string>('')
    const [product, setProduct] = useState<object>({
        name: '',
        brand: '',
        category: '',
        imageUrl: '',
        description: '',
        stockQuantity: '',
        price: '',

    })

    const handleImageFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files: FileList | null = e.target.files
        console.log(files)
        if (files) {


            setProduct({ ...product, imageUrl: files[0] })

            const url = URL.createObjectURL(files[0])
            // setProduct({ ...product, productImage: files[0] })
            setImage(url)
        }
    }

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        console.log("product", product)
        const igm = product.imageUrl
        console.log("img", igm)
        const formData = new FormData()
        formData.append('file', product.imageUrl)
        formData.append('name', product.name)
        formData.append('brand', product.brand)
        formData.append('category', product.category)
        formData.append('description', product.description)
        formData.append('stockQuantity', product.stockQuantity)
        formData.append('price', product.price)
        console.log('formdata', formData)
        console.log(product.imageUrl)
        try {
            const res = await axios.post('http://localhost:2002/api/add-product', formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            )
            console.log(res)
        } catch (error) {
            console.error(error)
        }

    }
    return (
        <div className='product'>
            <h1>Add Product</h1>
            <div className='product-form'>
                <div className='section-container'>
                    <div className='section-one'>
                        <label htmlFor='productName'>Product Name</label>
                        <input type="text" id="productName" placeholder="product name" onChange={e => setProduct({ ...product, name: e.target.value })} />
                        <label htmlFor='productBrand'>Product Brand</label>
                        <input type='text' id='productBrand' placeholder="Product brand" onChange={e => setProduct({ ...product, brand: e.target.value })} />
                        <label htmlFor="productCategory">Product Category</label>
                        <select id="productCategory" onChange={e => setProduct({ ...product, category: e.target.value })}>
                            <option selected disabled hidden>Please Select</option>
                            <option>Clothing</option>
                            <option>Sports</option>
                            <option>Fitness</option>
                            <option>Grocery</option>
                            <option>Electronics</option>
                            <option>Furniture</option>
                        </select>

                        <label htmlFor='prodectDescription'>Product Description</label>
                        <textarea id='productDescription' onChange={e => setProduct({ ...product, description: e.target.value })} />
                        <label htmlFor='stockQuantity'>Stock Quantity</label>
                        <input type='number' id='stockQuantity' onChange={e => setProduct({ ...product, stockQuantity: e.target.value })} />
                        <label htmlFor='productPrice'>Product Price</label>
                        <input type='number' id='productPrice' onChange={e => setProduct({ ...product, price: e.target.value })} />
                    </div>
                    <div className='section-two'>
                        <img src={image} alt="product image" className='product-img' />
                        <label htmlFor="productImage">Upload Product Image</label>
                        <input type="file" id='productImage' accept="image/*" className="product-img-file" onChange={handleImageFile} />
                    </div>
                </div>
                <button onClick={handleSubmit}>Add Product</button>
            </div>
        </div>
    )
}
