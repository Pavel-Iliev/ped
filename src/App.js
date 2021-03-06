import './App.css';
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Calendar from "./components/calendar/Calendar";
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
          <Home />
        </Route>
        <Route exact path="/calendar">
          <Calendar />
        </Route>
        <Route exact path="/avvisi">
          <h1>avvisi</h1>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
