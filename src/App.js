import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Profile from "./components/Profile";
function App() {
  return (
    <div className="dark:bg-gray-800 min-h-screen mx-auto sm:px-6 lg:px-8 bg-gray-300">
      <Router>
        <header>
          <Nav />
          <Input />
        </header>
        <Switch>
          <Route path="/u/:ign">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
