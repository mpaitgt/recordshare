import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Container from './Components/Reusable/Container';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home';
import Dash from './Components/Pages/Dash';
import Register from './Components/Pages/Register';
import Login from './Components/Pages/Login';

function App() {
  return (
    <Router>
      <Container>
      <Navbar />
      <Switch>
        <Route exact path="/dashboard" component={Dash}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/" component={Home}/>
      </Switch>
      </Container>
    </Router>
  );
}

export default App;
