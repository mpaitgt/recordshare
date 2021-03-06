import React, {useContext, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Components/Navbar';
import {SignUp, Login, Feed, Upload, Search, Dashboard, AlbumDetails} from './Pages';
import {UserContext} from './Components/Providers/UserProvider';
import PrivateRoute from './Components/PrivateRoute';
import userauth from './Utils/userauth';

function App(props) {
  const [user, setUser] = useContext(UserContext);

  useEffect(
		() => {
      const userObj = JSON.parse(userauth.getLocalStorage('user'));
			if (userObj) setUser(userObj);
    },
		[]
  );


  return (
    <Router>
      <Navbar />
      <Switch>
        
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/search" component={Search} />
        <PrivateRoute exact path="/upload" component={Upload} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={Feed} />
      </Switch>
    </Router>
  );
}

export default App;