import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

import ProfilPageMobile from './mobile/ProfilPageMobile';

const Container = styled.div`
  height : 100%;
`;

class ProfilPage extends React.Component{
  render(){
    return(
      <Container>
        <ProfilPageMobile />
      </Container>
    );
  }
}

export default withRouter(connect(null, null)(ProfilPage));