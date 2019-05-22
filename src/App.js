import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Routes from 'Routes/Routes.js';
import store from './store/store';


class App extends Component {
  state = {
    currentPage : 'login',
    loginError  : ''
  }  

  render() {

    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
