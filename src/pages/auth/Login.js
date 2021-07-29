import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { authLogin } from "../../actions/authAction";

//components
import TextInput from "../../components/form/textInput/TextInput";
import store from "../../store";

import "./style.css";

export default function Login() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch()
    const history = useHistory()


    // get value username on changed input
    const handleSetValueUserName = value => setUserName(value)

    // get value password on changed input
    const handleSetValuePassword = value => setPassword(value)

    // handle login user and send page
    const handleLogin = (event) => {
        event.preventDefault()
        dispatch(authLogin(userName, password))
        const { auth } = store.getState().authState
        if (auth) history.push("/")
    }


    return (
        <div className="login-page">
            <form className="login-page__form">
                <TextInput
                    type="text"
                    label="User Name"
                    id="userNameLogin"
                    name="userName"
                    onChange={handleSetValueUserName}
                />
                <TextInput
                    type="password"
                    label="Password"
                    id="passwordLogin"
                    name="password"
                    onChange={handleSetValuePassword}
                />
                <button
                    className="button"
                    onClick={handleLogin}
                >
                    Login
                </button>
                <div className="login-page__links">
                    <Link to="/">Home</Link>
                </div>
            </form>
        </div>
    )
}
