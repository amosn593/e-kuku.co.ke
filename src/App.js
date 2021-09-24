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
import SellNav from "./components/pages/SellNav";
import Login from "./components/profile/Login";
import Register from "./components/profile/Register";
import Resetpassword from "./components/profile/Resetpassword";
import ResetPasswordEmail from "./components/profile/ResetPasswordEmail";
import Mysells from "./components/profile/Mysells";
import Terms from "./components/inc/Terms";
import Privacy from "./components/inc/Privacy";
import About from "./components/inc/About";
import { useDispatch } from "react-redux";
import { check_authenticated, load_user } from "./redux/Apicalls";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(check_authenticated());
    dispatch(load_user());
  }, []);

  return (
    <div className="main-content">
      <Router>
        <Navbar />
        <div className="page-content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/chicks" exact component={Chick} />
            <Route path="/chicken" exact component={Chicken} />
            <Route exct path="/eggs" exact component={Egg} />
            <Route exct path="/chicken_feeds" exact component={Feed} />
            <Route exct path="/product/:id" exact component={Detail} />
            <Route exct path="/sell" exact component={SellNav} />
            <Route
              exct
              path="/poultry_structures"
              exact
              component={Equipments}
            />
            <Route exct path="/sign-in" exact component={Login} />
            <Route exct path="/sign-up" exact component={Register} />
            <Route
              exct
              path="/Reset-Password"
              exact
              component={Resetpassword}
            />
            <Route
              exct
              path="/Reset-Password-Email"
              exact
              component={ResetPasswordEmail}
            />
            <Route exct path="/my-sells" exact component={Mysells} />
            <Route exct path="/terms-and-conditions" exact component={Terms} />
            <Route exct path="/privacy-policy" exact component={Privacy} />
            <Route exct path="/about-e-kuku" exact component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
