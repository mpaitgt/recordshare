import React from 'react';
import omdb from '../Utils/omdb';
import Button from '../Components/Button/Button';
import {Link} from 'react-router-dom';

class Dash extends React.Component {
  state = {
    watch_list: []
  };

  componentDidMount() {
    this.getWatchList();
  }

  // componentDidUpdate() {
  //   this.getWatchList();
  // }

  getWatchList = () => {
    omdb.getWatchList()
      .then(res => {
        console.log(res.data) 
        this.setState({ watch_list: res.data })
      })
      .catch(err => { console.log(err) })
  }

  remove = id => {
    omdb.removeMovie(id)
      .then(res => console.log(res))
      .catch(err => {console.log(err)})
  }

  render() {
    return (
      <div className="page">
        <h1>This is the dashboard</h1>
        {this.state.watch_list.map(movie => {
          return (
            <div>
              <Link to={`/film/${movie.id}`}>
                <h1 style={{ display: 'inline' }}>{movie.title}</h1>
              </Link>
              <Button onClick={() => this.remove(movie.id)}>Remove</Button>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Dash;