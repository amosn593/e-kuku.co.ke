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
import Sell from "./components/pages/Sell";
import Login from "./components/profile/Login";
import Register from "./components/profile/Register";
import Resetpassword from "./components/profile/Resetpassword";
import ResetPasswordEmail from "./components/profile/ResetPasswordEmail";

function App() {
  return (
    <div className="main-content">
      <div className="page-content">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/chicks" exact component={Chick} />
            <Route path="/chicken" exact component={Chicken} />
            <Route exct path="/eggs" exact component={Egg} />
            <Route exct path="/chicken_feeds" exact component={Feed} />
            <Route exct path="/product/:id" exact component={Detail} />
            <Route exct path="/sell" exact component={Sell} />
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
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
