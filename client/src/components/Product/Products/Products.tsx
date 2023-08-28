import { useEffect, useState } from "react"
import axios from "axios"
import './products.scss'
import { Product } from "../Product/Product"


export interface ProductTypes {
    name: string,
    brand: string,
    category: string,
    imageUrl: string,
    description: string,
    stockQuantity: number,
    price: number,
    updatedAt: string,
    _id: string,
    _v: string
}
export const Products = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        const data = async () => {
            const token = localStorage.getItem("jwt_token")
            const res = await axios.get('http://localhost:2002/api/view-product', {
                headers: {
                    "auth-token": token
                }
            })
            setProducts(res.data.Products)
            console.log("Res", res)
        }
        data()
    }, [])
    console.log("Products", products)
    return (
        <div className="products">
            <h1>All Products</h1>
            <div className="product-container">
                {products.map((product: ProductTypes) => (
                    <Product product={product} />
                ))}
            </div>
        </div>
    )
}
