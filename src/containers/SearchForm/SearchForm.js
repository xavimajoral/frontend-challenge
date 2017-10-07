import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/index';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Spinner from '../../components/Spinner/Spinner';
import './SearchForm.css';

class SearchForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let param = this.state.value;
    if (param === '') {
      return;
    }
    this.props.fetchMovies(param);
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    const isLoading = this.props.movies.loadingMovies;
    let loading = null;
    if (isLoading) {
      loading = Spinner;
    }

    return (
      <form className="searchForm" onSubmit={ this.handleSubmit }>
        <TextField
          underlineFocusStyle={{borderColor: "#D50000"}}
          floatingLabelText="Search a movie"
          floatingLabelFocusStyle={{color: "#D50000"}}
          className="input"
          hintText="Adèle"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <RaisedButton
          backgroundColor="#D50000"
          labelColor="#fff"
          label="Search"
          labelPosition="after"
          className="button"
          onClick={ this.handleSubmit }
        />
        {loading}
      </form>
    );
  }
}

const mapStateToProps = (state = {}) => {
  return {...state};
};

export default connect(mapStateToProps, { fetchMovies })(SearchForm);