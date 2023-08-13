import { Login } from "../Login/Login"
import { AddProduct } from "../Product/AddProduct/AddProduct"
import { SignUp } from "../SignUp/SignUp"

export const HomePage = () => {
    return (
        <div>
            <h1>HomePage</h1>
            <SignUp />
            <Login />
            <AddProduct />
        </div>
    )
}
