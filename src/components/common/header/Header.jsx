import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authLogout } from "../../../actions/authAction";
import "./style.css"

export default function Header() {

    const dispatch = useDispatch()

    // get state redux
    const { auth, userName } = useSelector((state) => state.authState);

    // logout user => clear local 
    const handleLogout = () => dispatch(authLogout())

    return (
        <header className="header">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    {
                        !auth ? <Link to="/login">Login</Link> : <Link onClick={handleLogout}>Logout</Link>
                    }
                </li>
                <li className="user-name">
                    {auth ? `Hi ${userName} Wellcome` : ""}
                </li>
            </ul>
         
        </header>
    )
}
