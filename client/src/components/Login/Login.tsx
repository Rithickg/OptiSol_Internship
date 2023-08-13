import { Link } from 'react-router-dom'
import './login.scss'

export const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <div className="login-form">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="enter email" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="enter password" />
                <p>Don't have an account? <Link to='/signup'>SignUp</Link></p>
                <button>Login</button>
            </div>
        </div>
    )
}
