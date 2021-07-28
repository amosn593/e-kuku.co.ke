import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/inc/Navbar';
import Chick from './components/pages/Chick';
import Chicken from './components/pages/Chicken';
import Egg from './components/pages/Egg';
import Home from './components/pages/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/chicks" exact component={Chick}/>
          <Route path="/chicken" exact component={Chicken}/>
          <Route exct path="/eggs" exact component={Egg}/>
        </Switch>
      </Router>
    </>  
    );
}

export default App;