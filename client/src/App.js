import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Detail from './Pages/Detail';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/artist/detail/:id" component={Detail} />
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
