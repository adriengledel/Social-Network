import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
/*
  Public pages
 */
import Login        from 'Pages/LoginPage/LoginPage';
import LostPassword from 'Pages/LostPasswordPage/LostPasswordPage';
import FormConnection from 'Pages/FormConnection/FormConnection';
import Authentificate from 'Pages/Authentificate/Authentificate';
import ProfilPage     from 'Pages/ProfilPage/ProfilPage';

/*
  Private pages
 */


import {
  LOGIN_PAGE_PATH,
  LOST_PASSWORD_PATH,
  FORM_CONNECTION_PATH,
  AUTHENTIFICATE_PATH,
  PROFIL_PAGE
} from './Paths.js';

const isLogged = localStorage.getItem;

const Routes = ({logged}) => (
  !logged ?
    /*
      Public pages
     */
      <Switch>
        <Route path={FORM_CONNECTION_PATH} component={FormConnection} />  
        <Route path={LOST_PASSWORD_PATH}   component={LostPassword} />
        <Route path={AUTHENTIFICATE_PATH}  component={Authentificate} />
        <Route                             component={Login} />
      </Switch> :
    /*
    Private pages
    */
      <Switch>
        <Route path={PROFIL_PAGE}          component={ProfilPage} />
      </Switch>
);

export default connect(
  state => ({
    logged : localStorage.getItem('itemName')
  })
)(Routes);