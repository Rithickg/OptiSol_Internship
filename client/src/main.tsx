import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import { ErrorPage } from './components/ErrorPage/ErrorPage.tsx'
import { SignIn } from './components/SignIn/SignIn.tsx'
import { SignUp } from './components/SignUp/SignUp.tsx'
import { AddProduct } from './components/Product/AddProduct/AddProduct.tsx'
import { Products } from './components/Product/Products/Products.tsx'
import { Dashboard } from './components/Dashboard/Dashboard.tsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <ErrorPage />
}, {
  path: '/signin',
  element: <SignIn />
},
{
  path: '/signup',
  element: <SignUp />
},
{
  path: '/add-product',
  element: <AddProduct />
},
{
  path: '/products',
  element: <Products />
},
{
  path: '/dashboard',
  element: <Dashboard />
}])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
