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
  const { load_pending } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(load_user());
    // eslint-disable-next-line
  }, []);

  if (!load_pending) {
    return (
      <div className="main-content">
        <Router>
          <Navbar />
          <div className="page-content">
            <Switch>
              <Route component={Home} path="/" exact />
              <Route component={Chick} path="/chicks" exact />
              <Route component={Chicken} path="/chicken" exact />
              <Route component={Egg} path="/eggs" exact />
              <Route component={Feed} path="/feeds-medicine" exact />
              <Route component={Detail} path="/poultry_details/:id" exact />
              <Route component={SearchResult} path="/search" exact />
              <Route component={Equipments} path="/poultry-facilities" exact />
              <PublicRoute path="/sign-in" exact component={Login} />
              <PublicRoute path="/sign-up" exact component={Register} />
              <PrivateRoute component={Sell} path="/sell" exact />
              <PrivateRoute component={Mysells} path="/my-sells" exact />
              <PrivateRoute component={Mpesa} path="/sponsor/:id" exact />
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
              <Route path="/terms-and-conditions" exact component={Terms} />
              <Route path="/privacy-policy" exact component={Privacy} />
              <Route path="/about-e-kuku" exact component={About} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <div className="footer">
            {" "}
            <Footer />{" "}
          </div>
        </Router>
      </div>
    );
  } else {
    return <div className="mt-4 pt-4 text-center">Refreshing Website...</div>;
  }
}

export default App;
