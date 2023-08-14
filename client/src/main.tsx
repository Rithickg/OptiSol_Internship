import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
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

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {/* <App /> */}
    </QueryClientProvider>

  </React.StrictMode>,
)
