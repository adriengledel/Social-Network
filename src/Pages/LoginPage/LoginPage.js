import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import capitalize from 'capitalize';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


import LandingPage from 'components/common/LandingPage';
import LoginForm   from './LoginForm';
import HeaderMenu from 'components/common/HeaderMenu';
import Matrix from 'components/common/Matrix';

import {loginRequested} from 'store/actions/user';



import {
  AUTHENTIFICATE_PATH
} from 'Routes/Paths.js';

import API from 'utils/API';

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
  constructor(props){
    super(props);

    this.state = {
      redirect : false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data){
    console.log('data')
    /* API.login(data).then((data) => {
      console.log(data)
      if (data.data.text === "Authentification réussi") {
          this.setState({redirect : true});

      }else {
        auth.authenticate(data, () => {
          this.setState({redirectToReferrer: true})
        })
      }
    }); */
    this.props.loginRequested(data);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={AUTHENTIFICATE_PATH}/>;
    }
    return (
    <Container>
      <LandingPage footer={true}>
        <LoginForm onSubmit={this.handleSubmit} />
      </LandingPage>
    </Container> 
    );
  }
}


export default withRouter(connect(null, {loginRequested})(LoginPage));
