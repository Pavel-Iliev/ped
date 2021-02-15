import './App.css';
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact={true} path="/">
            <h1>Home</h1>
        </Route>
        <Route exact path="/calendar">
            <h1>calendar</h1>
        </Route>
        <Route exact path="/info">
          <h1>info</h1>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
