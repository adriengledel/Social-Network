import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/*
  Public pages
 */
import Login        from 'Pages/LoginPage/LoginPage';
import LostPassword from 'Pages/LostPasswordPage/LostPasswordPage';
import FormConnection from 'Pages/FormConnection/FormConnection';

/*
  Private pages
 */


import {
  LOST_PASSWORD_PATH,
  FORM_CONNECTION_PATH
} from './Paths.js';


const Routes = ({logged}) => (
  !logged ?
    /*
      Public pages
     */
    <Router>
      <Switch>
        <Route path={FORM_CONNECTION_PATH} component={FormConnection} />  
        <Route path={LOST_PASSWORD_PATH} component={LostPassword} />
        <Route                           component={FormConnection} />
      </Switch>
    </Router> :
    /*
      Private pages
     */
    <Router>
      <Switch>
      </Switch>
    </Router>
);

export default Routes;