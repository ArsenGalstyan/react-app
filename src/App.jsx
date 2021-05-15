import './App.css';
import { rout } from './rout'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  return (

    <div className="App">
      <Router>
        <nav>
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/аbоut">abaut</Link></li>
            <li><Link to="/info">info</Link></li>
          </ul>
        </nav>
        <Switch>
          {rout.map((el,i) => <Route key={i} exact={el.isExact} path={el.path} component={el.component} />)}
        </Switch>
      </Router>

    </div>
  );
}

export default App;
