import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Custom.css'
import Home from './components/Home';
import Listings from './components/Listings';
import Cart from './components/Cart';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>


        <div className="container-fluid" id="headernavbar">
          
          <nav id="headernavbarlinks">
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link" to="/"><img src="3bae.svg" height="50" alt="3bae" id="logo"/></Link>
              </li>
              <li className="nav-item">
                <span id="slogan">We're Like eBay, But With a Three&trade;</span>
              </li>
              <li className="vl"></li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/listings">Listings</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">Cart</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Switch>
          <Route path="/listings">
            <Listings />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>


      </div>
    </Router>
  );
}

export default App;
