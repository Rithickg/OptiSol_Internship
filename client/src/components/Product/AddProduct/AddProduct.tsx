import './addproduct.scss'

export const AddProduct = () => {
    return (
        <div>
            <h1>Add Product</h1>
            <div className='product-form'>
                <label htmlFor='productName'>Product Name</label>
                <input type="text" id="productName" placeholder="product name" />
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
                <label htmlFor="productImage">Add Product Image</label>
                <input type="file" id='productImage' accept="image/*" className="product-img" />
                <label htmlFor='prodectDescription'>Product Description</label>
                <textarea id='productDescription' />
                <label htmlFor='productPrice'>Product Price</label>
                <input type='number' id='productPrice' />
                <button>Add Product</button>
            </div>
        </div>
    )
}
