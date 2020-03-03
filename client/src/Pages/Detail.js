import React from 'react';
import omdb from '../Utils/omdb';

class Detail extends React.Component {
  state = {
    movie: {}
  }

  componentDidMount() {
    omdb.getMovieById(this.props.match.params.id)
      .then(res => { 
        console.log(res);
        // this.setState({ movie: res })
      })
      .catch(err => {
        console.log(err);
      })
  }
  
  render() {
    return (
      <div>
        Details
      </div>
    )
  }
}

export default Detail;