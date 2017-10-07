
const initialState = {
  token: '',
  loadingMovies: false,
  movies: [],
  openDialog: false,
  movieDialog: null
};

const MoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES':
      return state;
    case 'FETCH_MOVIES_PENDING':
      return {
        ...state,
        loadingMovies: true
      };
    case 'FETCH_MOVIES_FULFILLED':
      return {
        ...state,
        token: action.payload.data.listening_token,
        movies: state.movies.concat(action.payload.data),
        loadingMovies: false
      };
    case 'FETCH_MOVIES_REJECTED':
      alert('There is an error with the API');
      return {
        ...state,
        loadingMovies: false
      };
    case 'ADD_MOVIE_SOCKET':
      return {
        ...state,
        movies: state.movies.concat(action.movie)
      };
    case 'OPEN_MOVIE_DETAIL':
      const movieDialog = state.movies.find((movie) => {
        return movie.id === action.movieId;
      });
      return {
        ...state,
        openDialog: true,
        movieDialog: movieDialog
      };
    case 'CLOSE_MOVIE_DETAIL':
      return {
        ...state,
        openDialog: false
      };
    default:
      return state;
  }
};

export default MoviesReducer;