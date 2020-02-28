import React, {Component} from 'react';
import './Search.css';

class Search extends Component {
  render() {
    return (
      <form className="search-form">
        <input className="search-bar" type="text"></input>
        <button className="search-btn" type="submit">Search</button>
      </form>
    )
  }
}

export default Search;