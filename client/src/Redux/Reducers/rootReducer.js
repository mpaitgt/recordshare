const initState = {
  user: {},
  search_results: [],
  artist: {},
  movie: {}
};

const UPDATE_SEARCH_RESULTS = 'UPDATE_SEARCH_RESULTS';
const UPDATE_MOVIE = 'UPDATE_MOVIE';

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_RESULTS:
      return { search_results: action.search_results }
    case UPDATE_MOVIE:
      return { movie: action.movie }
    default:
      return state;
  }
}

const updateSearchResults = (data) => {
  return {
    type: UPDATE_SEARCH_RESULTS,
    search_results: [...data]
  }
}

const updateMovie = (movie_data) => {
  return {
    type: UPDATE_MOVIE,
    movie: Object.assign({}, movie_data)
  }
}

export { rootReducer, updateSearchResults, updateMovie };