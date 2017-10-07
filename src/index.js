import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
import thunk from 'redux-thunk';
import HomePage from './components/HomePage/HomePage';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import Fiber from 'material-ui/svg-icons/av/fiber-manual-record';
import AppBar from 'material-ui/AppBar';
import './index.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const createStoreWithMiddleware = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk)
));

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <MuiThemeProvider>
      <div className="wrapper">
        <AppBar
          title="Moviez"
          style={{backgroundColor: '#FFCA28', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 15px 20px'}}
          titleStyle={{color: '#000', marginTop: '11px'}}
          iconElementLeft={<IconButton className="mediumIcon"><Fiber color="#c62828" /></IconButton>}
        />
        <HomePage />
      </div>
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('root')
);
