import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GridList } from 'material-ui/GridList';
import { GridTile } from 'material-ui/GridList';
import DialogTemp from '../../components/Dialog/Dialog';

import './MovieList.css';
import notAvailable from '../../img/not_available.png';

class MovieList extends Component {

  openDialog = (id) => {
    const { dispatch } = this.props;
    dispatch({ type: 'OPEN_MOVIE_DETAIL', movieId: id })
  };

  renderMovies() {
    const { movies } = this.props.movies;
    if (this.props.movies.noResults === true) {
      return null;
    }
    return (
      movies.map((movie) => {
        return (
          <GridTile
            key={movie.id}
            title={movie.original_title}
            actionPosition="right"
            titlePosition="bottom"
            titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            cols={1}
            rows={1}
            moveid={movie.id}
            onClick={(e) => this.openDialog(movie.id)}
          >
            <img src={movie.full_poster_path.includes('null') ? notAvailable : movie.full_poster_path} alt={movie.original_title}/>
          </GridTile>
        )
      })
    )
  }

  renderDialog() {
    if (this.props.movies.openDialog) {
      return (
        <DialogTemp
          open={this.props.movies.openDialog}
          dispatch={this.props.dispatch}
          movie={this.props.movies.movieDialog}
        />
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <GridList
          cols={3}
          cellHeight={300}
          padding={1}
          className="gridList"
        >
          {this.renderMovies()}
        </GridList>
        {this.renderDialog()}
      </div>
    );
  }

}

const mapStateToProps = (state = {}) => {
  return {...state};
};

export default connect(mapStateToProps)(MovieList);
