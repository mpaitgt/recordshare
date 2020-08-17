import React, {useContext, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Components/Navbar';
// import Footer from './Components/Footer';
import {SignUp, Login, Feed, Home, Upload, Search, Dashboard, AlbumDetails} from './Pages';
// import PrivateRoute from './Components/PrivateRoute';
import {UserContext} from './Components/Providers/UserProvider';
import userauth from './Utils/userauth';

function App() {
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
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/upload" component={Upload} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/albums/id/:id" component={AlbumDetails} />
        <Route exact path="/upload" render={() => <Upload user={user} />} />
        <Route exact path="/" component={Home}/>
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;