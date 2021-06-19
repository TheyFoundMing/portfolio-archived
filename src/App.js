import logo from "./logo.svg";
import "./App.scss";

import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";

import Home from "./views/Home";
import About from "./views/About";
import Work from "./views/Work";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <div>
          <Route path exact="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
        </div>
      </Router>
    </div>
  );
}

export default App;
