import { Link, Route,Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import PreventRoute from './components/PreventRoute';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <div style={{display:'flex',justifyContent:"space-around"}}>
      <Link to="/">Home</Link>
      <Link to="/dashboard">dashboard</Link>
      <Link to="/signup">sign up</Link>
      </div>
      <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <PreventRoute exact path="/dashboard">
        <Dashboard/>
      </PreventRoute>
      <Route exact path="/signup">
        <Signup/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
