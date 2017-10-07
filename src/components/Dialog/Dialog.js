import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import notAvailable from '../../img/not_available.png';
import Fiber from 'material-ui/svg-icons/av/fiber-manual-record';
import IconButton from 'material-ui/IconButton';
import Favorite from 'material-ui/svg-icons/action/favorite';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import './Dialog.css';

const styles = {
  mediumIcon: {
    width: 48,
    height: 48,
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24,
  }
};

class DialogTemp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      starred: false
    }
  }

  handleClose = () => {
    const { dispatch } = this.props;
    dispatch({type: 'CLOSE_MOVIE_DETAIL'});
  };

  toggleStarred() {
    this.setState({
      starred: !this.state.starred
    });
  }

  render() {
    let icon, tooltip;
    const action = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={this.handleClose}
        style={{color: '#D50000'}}
      />
    ];

    if (this.state.starred) {
      icon = <Favorite color="#D50000" />;
      tooltip = "Remove from Favorites";
    } else {
      icon = <FavoriteBorder color="#D50000" />;
      tooltip = "Add to Favorites";
    }
    let actionIcon = <IconButton
                        tooltip={tooltip}
                        tooltipPosition="top-left"
                        touch={true}
                        onClick={() => this.toggleStarred()}
                        iconStyle={styles.mediumIcon}
                        style={styles.medium}
                      >
                        {icon}
                      </IconButton>;

    const movie = this.props.movie;
    const iconStyles = { marginRight: 10 };

    return (
      <Dialog
        actions={action}
        modal={false}
        open={this.props.open}
        onRequestClose={this.handleClose}
        bodyClassName="dialogWrapper"
      >
        <h1><Fiber color="#c62828" style={iconStyles} />{movie.title}</h1>
        <div className="movieDetails">
          <img src={movie.full_poster_path.includes('null') ? notAvailable : movie.full_poster_path} alt={movie.original_title}/>
          {actionIcon}
          <div className="description">
            <dl>
              <dt><strong>Original title:</strong> </dt>
              <dd>{movie.original_title}</dd>
              <dt><strong>Rating:</strong> </dt>
              <dd>{movie.vote_average}</dd>
              <dt><strong>Release date:</strong> </dt>
              <dd>{movie.release_date}</dd>
              <dt><strong>Overview:</strong></dt>
              <dd>{movie.overview}</dd>
            </dl>
          </div>
        </div>
      </Dialog>
    );
  }

}

export default DialogTemp;