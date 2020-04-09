import React from 'react';
import omdb from '../Utils/omdb';
import Button from '../Components/Elements/Button';
import {Link} from 'react-router-dom';
import styled from '@emotion/styled';

const H1 = styled.h1`
  font-size: 50px;
  font-family: var(--headerfont);
  color: white;
`;

class Dash extends React.Component {
  state = {
    watch_list: []
  };

  componentDidMount() {
    this.getWatchList();
  }

  getWatchList = () => {
    omdb.getWatchList()
      .then(res => {
        console.log(res.data) 
        this.setState({ watch_list: res.data })
      })
      .catch(err => { console.log(err) })
  }

  watchList = this.state.watch_list.map(movie => {
    return (
      <div>
        <Link to={`/film/${movie.id}`}>
          <h1 style={{ display: 'block' }}>{movie.title}</h1>
        </Link>
        <Button onClick={() => this.remove(movie.id)}>Remove</Button>
      </div>
    )
  })

  remove = id => {
    omdb.removeMovie(id)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="page">
        <H1>This is the dashboard</H1>
        {this.watchList}
      </div>
    )
  }
}

export default Dash;