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
import Protected from "./components/profile/Protected";
import Loggedin from "./components/profile/Loggedin";
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
import { useSelector } from "react-redux";

function App() {
  const { isAuthenticated, loggedin } = useSelector((state) => state.user);

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
            <Route exct path="/poultry_details/:id" exact component={Detail} />
            <Route
              exct
              path="/poultry_search/:search"
              exact
              component={SearchResult}
            />

            <Route
              exct
              path="/poultry_structures"
              exact
              component={Equipments}
            />
            <Loggedin
              exct
              path="/sign-in"
              exact
              component={Login}
              loggedin={loggedin}
            />
            <Route exct path="/sign-up" exact component={Register} />
            <Protected
              exct
              path="/sell"
              exact
              component={Sell}
              isAuthenticated={isAuthenticated}
            />
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
            <Protected
              exct
              path="/my-sells"
              exact
              component={Mysells}
              isAuthenticated={isAuthenticated}
            />
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
