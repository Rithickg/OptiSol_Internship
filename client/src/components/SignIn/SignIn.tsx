import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import productImg from '../../assets/Product presentation-rafikis.png'
import './signin.scss'

export const SignIn = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignIn = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:2002/api/signin', {
                email, password
            })
            console.log(res)
            if (res.status == 200) {
                navigate('/')
            }

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='signin'>
            <div className='signin-cover'>
                <img src={productImg} alt='feature' className='signin-img' />
            </div>
            <div className="signin-form">
                <h1>Welcome to the Store</h1>
                <h2>Sign-Up</h2>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="enter email" onChange={e => setEmail(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="enter password" onChange={e => setPassword(e.target.value)} />
                <p>Don't have an account? <Link className='link' to='/signup'>SignUp</Link></p>
                <button onClick={handleSignIn}>Login</button>
            </div>
        </div>
    )
}
