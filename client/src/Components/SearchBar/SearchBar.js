import React, {Component} from 'react';
import './Search.css';
import Container from '../Container/Container';
import omdb from '../../Utils/omdb';

function Search(props) {

  const submitSearch = e => {
    e.preventDefault();
    omdb.getMovies(this.state.search)
      .then(res => {
        console.log(res.data);
        this.setState({ results: res.data });
      })
      .catch(err => console.log(err));
  }

  const handleChange = e => {
    let {name, value} = e.target;
    this.setState({ [name]: value });
  }

  return (
    <Container>
      <form className="search-form" onSubmit={submitSearch}>
        <input name="search" value={this.state.search} className="search-bar" type="text" onChange={this.handleChange} />
        <button className="search-btn" type="submit">Search</button>
      </form>
    </Container>
  )
}

export default SearchBar;