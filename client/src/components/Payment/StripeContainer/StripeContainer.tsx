import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { PaymentForm } from "../PaymentForm/PaymentForm"

const PUBLIC_KEY = import.meta.env.VITE_STRIPE_PUBLIC_KEY

const StripeTestPromise = loadStripe(PUBLIC_KEY)

export const StripeContainer = () => {
    return (
        <Elements stripe={StripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}
