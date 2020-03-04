import React from 'react';
import omdb from '../Utils/omdb';

class Dash extends React.Component {
  state = {
    watch_list: []
  };

  componentDidMount() {
    this.getWatchList();
    omdb.getMovieById();
  }

  getWatchList = () => {
    omdb.getWatchList()
      .then(res => {
        console.log(res.data) 
        this.setState({ watch_list: res.data })
      })
      .catch(err => { console.log(err) })
  }

  render() {
    return (
      <div className="page">
        <h1>This is the dashboard</h1>
        {this.state.watch_list.map(movie => {
          return (
            <div>
              <h1>{movie.title}</h1>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Dash;