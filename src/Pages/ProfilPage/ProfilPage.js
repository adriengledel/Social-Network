import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import socketIOClient from "socket.io-client";

import { updateDatas } from 'store/update';
import { updateFriendRequest } from 'store/actions/friends';

import ProfilPageMobile from './mobile/ProfilPageMobile';

var socket;

const Container = styled.div`
  height : 100%;
`;

class ProfilPage extends React.Component{
  constructor(props){
    super(props);
    this.handleAcceptRequest      = this.handleAcceptRequest.bind(this);
    this.handleIgnoreRequest      = this.handleIgnoreRequest.bind(this);
    socket = socketIOClient('http://localhost:8000/');
  }

  componentDidMount(){
    this.props.updateDatas();
  }
 
  handleAcceptRequest(friendId){
    console.log('accept', friendId)
    const { user } = this.props;
    this.props.updateFriendRequest(user._id, friendId, 3, 3);
  }

  handleIgnoreRequest(friendId){
    const { user } = this.props;
    this.props.updateFriendRequest(user._id, friendId, 4, 4);
  }
  render(){
    const { users, user, friends } = this.props;
    return(
      <Container>
        <ProfilPageMobile 
          users={users}
          user={user}
          friends={friends}
          accepteRequest={this.handleAcceptRequest}
          ignoreRequest={this.handleIgnoreRequest}
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
  updateDatas,
  updateFriendRequest
})(ProfilPage);