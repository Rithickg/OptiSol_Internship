import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App.tsx'
import { ErrorPage } from './components/ErrorPage/ErrorPage.tsx'
import { SignIn } from './components/SignIn/SignIn.tsx'
import { SignUp } from './components/SignUp/SignUp.tsx'
import { AddProduct } from './components/Product/AddProduct/AddProduct.tsx'
import { Products } from './components/Product/Products/Products.tsx'

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
}])

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {/* <App /> */}
    </QueryClientProvider>

  </React.StrictMode>,
)
