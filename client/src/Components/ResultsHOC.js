import React, {useContext} from 'react';
import API from '../Utils';
import {ResultsContext} from '../Components/Providers/ResultsProvider';

const ResultsHOC = (WrappedComponent) => (props) => {
  // const [results, setResults] = useContext(ResultsContext);

  const genreClick = e => {
    e.preventDefault();
    API.db.filterGenres(e.target.textContent)
      .then(res => console.log(res.data));
  }

  return (
    <WrappedComponent genreClick={genreClick} {...props} />
  );
}

export default ResultsHOC;