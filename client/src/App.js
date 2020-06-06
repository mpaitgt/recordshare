import React, {useContext} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Register from './Pages/Signup';
import Login from './Pages/Login';
import Stories from './Pages/Stories';
import Home from './Pages/Home';
import Upload from './Pages/Upload';
import Dashboard from './Pages/Dashboard';
import Footer from './Components/Footer';
import AlbumDetails from './Pages/AlbumDetails';
import {PayloadProvider, PayloadContext} from './Components/Providers/PayloadProvider';

function App() {
  const [artistAlbum, setArtistAlbum] = useContext(PayloadContext);

  return (
    <Router>
        <Navbar />
        <PayloadProvider>
        <Switch>
          <Route exact path="/stories" component={Stories} />
          <Route exact path="/upload" component={Upload} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route 
            path="/albums/id/:artist/:title" 
            render={() => <AlbumDetails album={artistAlbum.title} artist={artistAlbum.artist} />} 
          />
          <Route exact path="/" component={Home}/>
        </Switch>
        </PayloadProvider>
        <Footer />
    </Router>
  );
}

export default App;
