import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Container from './Components/Container/Container';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home';
import Dash from './Components/Pages/Dash';
import Register from './Components/Pages/Register';
import Login from './Components/Pages/Login';
import Search from './Components/Search/Search';

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
      <Switch>
        <Route exact path="/dashboard" component={Dash}/>
        <Route exact path="/search" component={Search}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        {/* <Route path="/film/:id" component={ContentDetails}/> */}
        <Route exact path="/" component={Home}/>
      </Switch>
      </Container>
    </Router>
  );
}

export default App;
