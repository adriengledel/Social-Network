import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Routes from 'Routes/Routes.js';
import store from './store/store';
import {history} from 'store/store';
import { ConnectedRouter } from 'connected-react-router';

console.log(history, 'inapp');

class App extends Component {
  state = {
    currentPage : 'login',
    loginError  : ''
  }  

  render() {

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App; 
