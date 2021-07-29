import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from "../pages/about/About";
import Login from '../pages/auth/Login';
import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";
import PrivateRoute from "./PrivetRoute";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        <PrivateRoute path="/profile" component={Profile} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default Routes;

