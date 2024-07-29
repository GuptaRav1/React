import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError()
    return (
        <div>
            <h1>Something went wrong.....!!!</h1>
            <h2>{err.status}: {err.statusText}</h2>
            <p>{err.message}</p>

        </div>
    )
}

export default Error