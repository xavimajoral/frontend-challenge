import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import Error from 'material-ui/svg-icons/alert/error';

class NoResults extends Component {

  render() {
    const styles = {
      paper: {
        height: 100,
        width: 400,
        margin: '0 auto',
        textAlign: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.55)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: '25%'
      },
      stylePar: {
        fontSize: 32,
        color: '#000'
      },
      heart: {
        marginRight: 24,
        width: 40,
        height: 40
      }
    };

    if (this.props.movies.noResults === true) {
      return (
        <Paper style={styles.paper} zDepth={3}>
          <Error color="#D50000" style={styles.heart} />
          <p style={styles.stylePar}>No Results</p>
        </Paper>
      );
    } else {
      return null;
    }
  }

}

const mapStateToProps = (state = {}) => {
  return {...state};
};

export default connect(mapStateToProps)(NoResults);
