import React, {Component, useState} from 'react';
import ContentCard from '../Components/ContentCard/ContentCard';
import MusicCard from '../Components/ContentCard/MusicCard';
import Transition from '../Components/Transition';
import tmdb from '../Utils/tmdb';
import spotify from '../Utils/spotify';
import SearchCard from '../Components/SearchContent/SearchCard';
import ResultsContainer from '../Components/ResultsContainer';
import {updateSearchResults} from '../Redux/Reducers/rootReducer';
import {connect} from 'react-redux';

function Search(props) {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');
  const [results, setResults] = useState(null);

  const searchMovies = e => {
    e.preventDefault();
    tmdb.getMovieByTerm(search)
      .then(res => {
        if (res.data.length === 0) {
          setResults(false);
        } else {
          setResults(true);
          setType('Movie');
          props.updateSearchResults(res.data);
        }
      })
      .catch(err => console.log(err));
  }

  const searchMusic = e => {
    e.preventDefault();
    spotify.getArtists(search)
      .then(res => {
        if (res.data.length === 0) {
          setResults(false);
        } else {
          setResults(true);
          setType('Music');
          props.updateSearchResults(res.data);
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <Transition>
      <div className="page">
        <SearchCard 
          searchMovies={searchMovies}
          searchMusic={searchMusic}
          search={search}
          handleChange={e => setSearch(e.target.value)}
        />
      </div>
      <ResultsContainer>
        {
          props.search_results.map(item => {
            return (
              <ContentCard content={item} type={type} />
            )
          })
        }
      </ResultsContainer>
    </Transition>
  )
}

const matchStateToProps = (state) => {
  return {
    search_results: state.search_results
  }
};

const matchDispatchToProps = (dispatch) => {
  return {
    updateSearchResults: (data) => {
      dispatch(updateSearchResults(data))
    }
  }
}

export default connect(matchStateToProps, matchDispatchToProps)(Search);