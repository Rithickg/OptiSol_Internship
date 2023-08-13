import { useRouteError, useNavigate, isRouteErrorResponse } from 'react-router-dom'

export const ErrorPage: React.FC = () => {
    const error = useRouteError() as Error
    const navigate = useNavigate()
    console.log(error)
    if (!isRouteErrorResponse(error)) {
        return null
    }
    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <button onClick={() => navigate(-1)}>&larr; Go Back</button>
        </div>
    )
}

