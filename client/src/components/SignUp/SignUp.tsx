import { Link } from 'react-router-dom'
import './signup.scss'

export const SignUp = () => {
    return (
        <div>
            <h1>SignUp</h1>
            <div className='signup-form'>
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" placeholder="enter full name" />
                <label htmlFor='email'>Email</label>
                <input type="email" id="email" placeholder="enter email" />
                <label htmlFor="mobileNumber">Mobile Number</label>
                <input type="tel" id="mobileNumber" placeholder="enter mobile number" />
                <label htmlFor="password">Set password</label>
                <input type="password" id="password" placeholder="password" />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" placeholder="Confirm Password" />
                <div>
                    <input type='checkbox' />
                    <label>show password</label>
                </div>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <button>SignUp</button>
            </div>
        </div>
    )
}
