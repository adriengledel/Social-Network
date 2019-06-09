import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LandingPage from 'components/common/LandingPage';

import { LOGIN_PATH } from 'Routes/Paths';

class Authentificate extends React.Component{
  render(){
    return(
      <LandingPage>
        <div>votre compte à bien été créé, vous avez reçu un mail</div>
        <Link to="/">login page</Link>
      </LandingPage>
    );
  }
}

export default Authentificate;