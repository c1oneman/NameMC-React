import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Nav />
        </header>
        <Switch>
          <Route path="/profile/:id">{/* <Details /> */}</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
