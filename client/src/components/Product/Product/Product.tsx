// import { ProductTypes } from "../Products/Products"
import './product.scss'

export const Product = ({ product }) => {
    return (
        <div className="ind-product" key={product._id}>
            <img className="product-img" src={`http://localhost:2002/products/` + product.imageUrl} alt={product.name} />
            <h1>{product.name}</h1>
            <h4>{product.brand}</h4>
            <p>{product.description}</p>
            <p>&#8377;{product.price}</p>
        </div>
    )
}
