import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Stories from './Pages/Stories';
import Home from './Pages/Home';
import Upload from './Pages/Upload';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/stories" component={Stories} />
        <Route exact path="/upload" component={Upload}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
