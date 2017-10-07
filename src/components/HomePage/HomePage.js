import React, { Component } from 'react';
import SearchForm from '../../containers/SearchForm/SearchForm';
import MovieList from '../../containers/MovieList/MovieList';
import NoResults from '../../containers/NoResults/NoResults';

import './HomePage.css';
import bg from '../../img/poster_6.jpg';

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <img src={bg} className="bg" alt="homeBg"/>
        <SearchForm />
        <MovieList />
        <NoResults />
      </div>
    );
  }
}

export default HomePage;
