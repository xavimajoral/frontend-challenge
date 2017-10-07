import axios from 'axios';
import openSocket from 'socket.io-client';
import { URL, URL_CLEAN } from "../constants";

function connectSocket(token) {
  const socket = openSocket.connect(URL_CLEAN);
  return (dispatch) => {
    socket.on('connect', () => {
      dispatch(subscribeSocket(socket, token))
    });
  }
}

function subscribeSocket(socket, token) {
  return function (dispatch) {
    socket.on(`movies.${token}`, (res) => {
      dispatch(checkPacket(JSON.parse(res)))
    });
  }
}

function checkPacket(res) {
  return function (dispatch) {
    if (res.status === 'terminated') {
      dispatch({type: 'END_MOVIES_SOCKET'});
    } else {
      dispatch({type: 'ADD_MOVIE_SOCKET', movie: res});
    }
  }
}

export function fetchMovies(param) {
  const request = axios.get(`${URL}${param}`);

  return function (dispatch) {
    dispatch({ type: 'FETCH_MOVIES_PENDING'});
    request.then(
      result => dispatch({ type: 'FETCH_MOVIES_FULFILLED', payload: result})
    ).then((result) => {
        dispatch(connectSocket(result.payload.data.listening_token));
      }
    )
  }

}
