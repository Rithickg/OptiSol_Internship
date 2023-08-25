import { Link } from "react-router-dom"
import { BiSolidStore } from "react-icons/bi"
import './navbar.scss'

export const NavBar = () => {
    return (
        <nav className="navbar">
            <ul>
                <div className="nav-one">
                    <li><Link to="/">
                        <i><BiSolidStore className="store-icon" /></i>
                        Store </Link>
                    </li>
                </div>
                <div className="nav-two">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/products">Product</Link></li>
                    <li><Link to="/signin">SignIn</Link></li>
                    <li><Link to="/signup">SignUp</Link></li>
                </div>

            </ul>
        </nav>
    )
}
