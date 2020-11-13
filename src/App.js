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
  Route
} from "react-router-dom";
import HeaderNavbar from './components/HeaderNavbar';

function App() {
  return (
    <Router>
      <div>

        <HeaderNavbar />

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
