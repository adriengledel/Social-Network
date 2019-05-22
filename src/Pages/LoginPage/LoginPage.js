import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LandingPage from 'components/common/LandingPage';
import LoginForm   from './LoginForm';
import HeaderMenu from 'components/common/HeaderMenu';
import Matrix from 'components/common/Matrix';

const Container = styled.div`
  height : 100%;
  @media(max-width:800px){
      font-size : 0.7em;
  }

  @media(max-width:600px){
      font-size : 0.7em;
  }

  @media(max-width:360px){
      font-size : 0.5em;
  }
`;

class LoginPage extends React.Component {
  render() {
    const { onSubmit, errorMessage } = this.props;

    return (
    <Container>
      <LandingPage footer={true}>
        <LoginForm onSubmit={onSubmit} errorMessage={errorMessage}/>
      </LandingPage> 
    </Container>  
    );
  }
}

export default LoginPage;
