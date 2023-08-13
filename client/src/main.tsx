import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import { ErrorPage } from './components/ErrorPage/ErrorPage.tsx'
import { Login } from './components/Login/Login.tsx'
import { SignUp } from './components/SignUp/SignUp.tsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <ErrorPage />
}, {
  path: '/login',
  element: <Login />
},
{
  path: '/signup',
  element: <SignUp />
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
