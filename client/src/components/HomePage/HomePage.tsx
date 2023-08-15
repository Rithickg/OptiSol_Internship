// import { Login } from "../Login/Login"
// import { AddProduct } from "../Product/AddProduct/AddProduct"
// import { Products } from "../Product/Products/Products"
import { SignUp } from "../SignUp/SignUp"

export const HomePage = () => {
    return (
        <div className="homepage">
            {/* <h1>HomePage</h1> */}
            <SignUp />
            {/* <Products /> */}
            {/* <Login />
            <AddProduct /> */}
        </div>
    )
}
