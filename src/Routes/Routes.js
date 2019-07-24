import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
/*
  Public pages
 */
import Login          from 'Pages/LoginPage/LoginPage';
import LostPassword   from 'Pages/LostPasswordPage/LostPasswordPage';
import FormConnection from 'Pages/FormConnection/FormConnection';
import Authentificate from 'Pages/Authentificate/Authentificate';
import ProfilPage     from 'Pages/ProfilPage/ProfilPage';
import ProfileUser    from 'Pages/ProfilPage/mobile/ProfileUser';

/*
  Private pages
 */


import {
  LOGIN_PAGE_PATH,
  LOST_PASSWORD_PATH,
  FORM_CONNECTION_PATH,
  AUTHENTIFICATE_PATH,
  PROFIL_PAGE,
  PROFIL_USER
} from './Paths.js';

const isLogged = localStorage.getItem;

const Routes = ({logged}) => (
  !logged ?
    /*
      Public pages
     */
    <Router>
      <Switch>
        <Route path={FORM_CONNECTION_PATH} component={FormConnection} />  
        <Route path={LOST_PASSWORD_PATH}   component={LostPassword} />
        <Route path={AUTHENTIFICATE_PATH}  component={Authentificate} />
        <Route path={LOGIN_PAGE_PATH}      component={Login} />
        <Route                             component={Login} />
      </Switch>
    </Router> :
    /*
    Private pages
    */
   <Router>
      <Switch>
        <Route path={`${PROFIL_USER}/:id`} component={ProfileUser} />
        <Route path={PROFIL_PAGE}          component={ProfilPage} />
        <Route                             component={ProfilPage} />

      </Switch>
    </Router>
);

export default connect(
  state => ({
    logged : localStorage.getItem('itemName')
  })
)(Routes);