import axios from 'axios';
import io from 'socket.io-client';
import { URL } from "../constants";

function connectSocket(token) {
  const socket = io.connect(URL);
  return (dispatch) => {
    socket.on('connect', () => {
      dispatch(subscribeSocket(socket, token))
    });
  }
}

function subscribeSocket(socket, token) {
  return function (dispatch) {
    socket.on(`movies.${token}`, (res) => {
      dispatch(checkPacket(socket, JSON.parse(res)))
    });
  }
}

function checkPacket(socket, res) {
  return function (dispatch) {
    if (res.status === 'terminated') {
      dispatch({type: 'END_MOVIES_SOCKET'});
      socket.disconnect();
    } else {
      dispatch({type: 'ADD_MOVIE_SOCKET', movie: res});
    }
  }
}

export function fetchMovies(param) {
  const request = axios.get(`${URL}/api/v1/movies?query=${param}`);

  return function (dispatch) {
    dispatch({ type: 'FETCH_MOVIES_PENDING'});
    request.then((result) => {
      if (!result.data.id) {
        dispatch({ type: 'NO_RESULTS'});
      } else {
        dispatch({ type: 'FETCH_MOVIES_FULFILLED', payload: result});
      }
      return result;
    })
    .then((result) => {
        dispatch(connectSocket(result.data.listening_token));
      }
    )
  }

}
