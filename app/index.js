import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Popular from "./components/Popular";
import Battle from "./components/Battle";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <ul className='links'>
            <li>
              <Link to='/popular'>Popular</Link>
            </li>
            <li>
              <Link to='/'>Battle</Link>
            </li>
          </ul>

          <Switch>
            <Route path='/popular' component={Popular} />
            <Route exact paht='/' component={Battle} />
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
