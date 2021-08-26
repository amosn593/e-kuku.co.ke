import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/inc/Navbar";
import Footer from "./components/inc/Footer";
import NotFound from "./components/inc/NotFound";
import Chick from "./components/pages/Chick";
import Chicken from "./components/pages/Chicken";
import Egg from "./components/pages/Egg";
import Home from "./components/pages/Home";
import Detail from "./components/pages/Detail";
import Feed from "./components/pages/Feed";
import Sell from "./components/pages/Sell";
import Login from "./components/profile/Login";

function App() {
  return (
    <>
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
          <Route exct path="/sign-in" exact component={Login} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
