import React, {Component} from 'react';
import './Search.css';
import omdb from '../../Utils/omdb';

class Search extends Component {
  state = {
    search: '',
    results: []
  }

  submitSearch = e => {
    e.preventDefault();
    omdb.getMovies(this.state.search)
      .then(res => {
        console.log(res.data);
        this.setState({ results: res.data });
      })
      .catch(err => console.log(err));
  }

  handleChange = e => {
    let {name, value} = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
      <form className="search-form" onSubmit={this.submitSearch}>
        <input name="search" value={this.state.search} className="search-bar" type="text" onChange={this.handleChange} />
        <button className="search-btn" type="submit">Search</button>
      </form>
      {this.state.results.length > 0 ? 
      this.state.results.map(movie => {
        return(
          <h4 key={movie.id}>{movie.title}</h4>
        )
      })
      :
      null
      }

      </div>
    )
  }
}

export default Search;