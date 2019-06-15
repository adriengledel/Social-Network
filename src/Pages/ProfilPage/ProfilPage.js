import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

import { updateDatas } from 'store/update';

import ProfilPageMobile from './mobile/ProfilPageMobile';

const Container = styled.div`
  height : 100%;
`;

class ProfilPage extends React.Component{
  componentDidMount(){
    this.props.updateDatas();
  }
  render(){
    const { users, user, friends } = this.props;
    return(
      <Container>
        <ProfilPageMobile 
          users={users}
          user={user}
          friends={friends}
        />
      </Container>
    );
  }
}


export default connect( state => ({
  users : state.data.users,
  user  : state.data.user,
  friends : state.friends.friends
}), {
  updateDatas
})(ProfilPage);