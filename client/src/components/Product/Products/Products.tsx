import { useEffect, useState } from "react"
import axios from "axios"

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
            const res = await axios.get('http://localhost:2002/api/view-product')
            setProducts(res.data.Products)
            console.log("Res", res)
        }
        data()
    }, [])
    console.log("Products", products)
    return (
        <div>
            <h1>All Products</h1>
            <div>
                {products?.map((product: ProductTypes) => {
                    return (
                        <div key={product._id}>
                            <img src={product.imageUrl} alt={product.name} />
                            <h1>{product.name}</h1>
                            <h6>{product.brand}</h6>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
