import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuth } from "../../../actions/authAction";
import Header from "../header/Header";
import "./style.css"

export default function Layout({ children, pageTitle }) {

    const dispatch = useDispatch()

    useEffect(() => {
        handleSetAutn()
    }, []);

    // set auth state on local to redux state
    const handleSetAutn = () => {
        const authLocal = localStorage.getItem("auth")
        const userNameLocal = localStorage.getItem("userName")

        if(authLocal) dispatch(setAuth(userNameLocal))
    }

    return (
        <div className="main">
            <Header />
            <div className="pages">
                <h2 className="pages__title">{pageTitle}</h2>
                {children}
            </div>
        </div>
    )
}
