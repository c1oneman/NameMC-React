import "./styles/App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Link to="/">
            <h1>NameMC</h1>
          </Link>
        </header>
        <Switch>
          <Route path="/profile/:id">{/* <Details /> */}</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
