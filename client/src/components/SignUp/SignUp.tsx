import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './signup.scss'
// import image from '../../assets/6666301.jpg'
import productImg from '../../assets/Product presentation-rafikis.png'
import { useState } from 'react'

export const SignUp = () => {
    const navigate = useNavigate()
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [mobileNo, setMobileNo] = useState('')
    const [password, setPassword] = useState('')


    const handleSignUp = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        const mobileNumber = parseInt(mobileNo)
        try {
            const res = await axios.post('http://localhost:2002/api/signup', {
                fullName, email, mobileNumber, password
            })
            console.log(res)
            if (res.status == 200) {
                navigate('/signin')
            }

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='signup'>
            <div className='signup-cover'>
                <img src={productImg} alt='feature' className='signup-img' />
            </div>
            <div className='signup-form'>
                <h1>Welcome to the Store</h1>
                <h2>Sign-Up</h2>
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" placeholder="enter full name" onChange={e => setFullName(e.target.value)} />
                <label htmlFor='email'>Email</label>
                <input type="email" id="email" placeholder="enter email" onChange={e => setEmail(e.target.value)} />
                <label htmlFor="mobileNumber">Mobile Number</label>
                <input type="number" id="mobileNumber" placeholder="enter mobile number" onChange={e => setMobileNo(e.target.value)} />
                <label htmlFor="password">Set password</label>
                <input type="password" id="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" placeholder="Confirm Password" />
                <div className='pass'>
                    <input type='checkbox' />
                    <span>show password</span>
                </div>
                <p>Already have an account? <Link className='link' to="/signin">SignIn</Link></p>
                <button onClick={handleSignUp}>SignUp</button>
            </div>
        </div>
    )
}
