import React, { Component } from 'react';
import SearchForm from '../../containers/SearchForm/SearchForm';
import MovieList from '../../containers/MovieList/MovieList';

import './HomePage.css';

// Import aletori `poster_${num}`

import a from '../../img/poster_1.jpg';
import c from '../../img/poster_3.jpg';
import d from '../../img/poster_4.jpg';
import e from '../../img/poster_5.jpg';
import f from '../../img/poster_6.jpg';
import h from '../../img/poster_8.jpg';
import k from '../../img/poster_10.jpg';

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <img src={f} className="bg" alt="homeBg"/>
        <SearchForm />
        <MovieList />
      </div>
    );
  }
}

export default HomePage;
