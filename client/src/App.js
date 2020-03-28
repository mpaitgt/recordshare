import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Container from './Components/Container';
import Navbar from './Components/Navbar/Navbar';
import Register from './Pages/Register';
import Login from './Pages/Login';
import MovieDetail from './Pages/MovieDetail';
import ArtistDetail from './Pages/ArtistDetail';
import Search from './Pages/Search';

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
      <Switch>
        <Route exact path="/artists/:id" component={ArtistDetail} />
        <Route exact path="/movies/:id" component={MovieDetail} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/" component={Search}/>
      </Switch>
      </Container>
    </Router>
  );
}

export default App;
