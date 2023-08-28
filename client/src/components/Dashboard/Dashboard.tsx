import { Link } from 'react-router-dom'
import './dashboard.scss'


export const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <h2><Link to="/add-product">Add Product</Link></h2>
        </div>
    )
}
