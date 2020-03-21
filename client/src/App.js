import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Container from './Components/Container';
import Navbar from './Components/Navbar';
import Dash from './Pages/Dash';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Detail from './Pages/Detail';
import Search from './Pages/Search';

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
      <Switch>
        {/* <Route exact path="/dashboard" component={Dash}/> */}
        <Route exact path="/movies/:id" component={Detail} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/" component={Search}/>
      </Switch>
      </Container>
    </Router>
  );
}

export default App;
