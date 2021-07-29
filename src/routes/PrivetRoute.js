import { Route, Redirect } from 'react-router-dom'

export default function PrivateRoute({ component: Component, ...rest }) {

    const auth = localStorage.getItem("auth");
    const userName = localStorage.getItem("userName");
    return (
        <Route
            {...rest}
            render={props =>
                auth && userName ? (
                    <Component {...props} />
                ) : (
                        <Redirect to="/" />
                    )
            }
        />
    )
}