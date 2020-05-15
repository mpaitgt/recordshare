import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Register from './Pages/Signup';
import Login from './Pages/Login';
import Stories from './Pages/Stories';
import Home from './Pages/Home';
import Upload from './Pages/Upload';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route exact path="/stories" component={Stories} />
          <Route exact path="/upload" component={Upload}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Register}/>
          <Route exact path="/" component={Home}/>
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
