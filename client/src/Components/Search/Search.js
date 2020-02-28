import React, {Component} from 'react';
import './Search.css';
import Container from '../Container/Container';
import ContentCard from '../ContentCard/ContentCard';
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
      <Container>
        {this.state.results.map(movie => {
          return (
            <ContentCard content={movie} key={movie.id}/>
          )
        })
        }
      </Container>
      </div>
    )
  }
}

export default Search;