import { useState } from 'react'
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import axios from 'axios'
import './paymentform.scss'



const baseStripeElementOptions = {
    style: {
        base: {
            fontFamily: 'Oxanium',
            fontSize: '16px',
            color: '#000000',
            '::placeholder': {
                color: '#000000',
            },
        },
        invalid: {
            color: '#9e2146',
        },
    }
}



export const PaymentForm = () => {
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()

    const handlePayment = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement)
        if (cardElement) {
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: "card",
                card: cardElement
            })

            if (!error) {
                try {
                    const { id } = paymentMethod
                    const res = await axios.post("http://localhost:2002/payment", {
                        amount: 1000,
                        id
                    })
                    if (res.data.success) {
                        console.log("Successful Payment")
                        setSuccess(true)
                    }
                } catch (error) {
                    console.log("Error", error);
                }
            } else {
                console.log(error.message);
            }
        }



    }

    return (
        <div className='payment'>
            {!success ?
                <form onSubmit={handlePayment} className='payment-form'>
                    <CardElement options={baseStripeElementOptions} />
                    <button>Pay</button>
                </form>
                :
                <div>
                    <h2>Payment Successful, your order has been placed</h2>
                </div>}
        </div>
    )
}
