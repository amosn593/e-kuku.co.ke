import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/inc/Navbar";
import Footer from "./components/inc/Footer";
import NotFound from "./components/inc/NotFound";
import Chick from "./components/pages/Chick";
import Chicken from "./components/pages/Chicken";
import Equipments from "./components/pages/Equipments";
import Egg from "./components/pages/Egg";
import Home from "./components/pages/Home";
import Detail from "./components/pages/Detail";
import Feed from "./components/pages/Feed";
import SearchResult from "./components/pages/SearchResult";
import Sell from "./components/pages/Sell";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";
import Login from "./components/profile/Login";
import Register from "./components/profile/Register";
import Resetpassword from "./components/profile/Resetpassword";
import ResetPasswordEmail from "./components/profile/ResetPasswordEmail";
import Mysells from "./components/profile/Mysells";
import Mpesa from "./components/mpesa/Mpesa";
import Terms from "./components/inc/Terms";
import Privacy from "./components/inc/Privacy";
import About from "./components/inc/About";
import { useDispatch, useSelector } from "react-redux";
import { load_user } from "./redux/Apicalls";

function App() {
  const { isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(load_user());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="main-content">
      <Router>
        <Navbar />
        <div className="page-content">
          <Switch>
            <PrivateRoute component={Home} path="/" exact />
            <PrivateRoute component={Chick} path="/chicks" exact />
            <PrivateRoute component={Chicken} path="/chicken" exact />
            <PrivateRoute component={Egg} path="/eggs" exact />
            <PrivateRoute component={Feed} path="/feeds-medicine" exact />
            <PrivateRoute
              component={Detail}
              path="/poultry_details/:id"
              exact
            />
            <PrivateRoute component={SearchResult} path="/search" exact />
            <PrivateRoute
              component={Equipments}
              path="/poultry-facilities"
              exact
            />
            <PublicRoute path="/sign-in" exact component={Login} />
            <PublicRoute path="/sign-up" exact component={Register} />
            <PrivateRoute component={Sell} path="/sell" exact />
            <PublicRoute
              path="/Reset_Password"
              exact
              component={Resetpassword}
            />
            <PublicRoute
              path="/Reset_Password_email"
              exact
              component={ResetPasswordEmail}
            />
            <PrivateRoute component={Mysells} path="/my-sells" exact />
            <PrivateRoute component={Mpesa} path="/sponsor/:id" exact />
            <Route path="/terms-and-conditions" exact component={Terms} />
            <Route path="/privacy-policy" exact component={Privacy} />
            <Route path="/about-e-kuku" exact component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <div className="footer">{isAuthenticated && <Footer />}</div>
      </Router>
    </div>
  );
}

export default App;
