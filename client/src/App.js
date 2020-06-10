import React, {useContext, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import SignUp from './Pages/Signup';
import Login from './Pages/Login';
import Stories from './Pages/Stories';
import Home from './Pages/Home';
import Upload from './Pages/Upload';
import Search from './Pages/Search';
import Dashboard from './Pages/Dashboard';
import Footer from './Components/Footer';
import AlbumDetails from './Pages/AlbumDetails';
import { UserContext } from './Components/Providers/UserProvider';
import userauth from './Utils/userauth';

function App() {
  const [user, setUser] = useContext(UserContext);

  useEffect(
		() => {
      const userObj = JSON.parse(userauth.getLocalStorage('user'));
			if (userObj) {
				setUser(userObj);
    	}
    },
		[setUser]
	);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/stories" component={Stories} />
        <Route exact path="/upload" component={Upload} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/albums/id/:id" component={AlbumDetails} />
        <Route exact path="/" component={Home}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
