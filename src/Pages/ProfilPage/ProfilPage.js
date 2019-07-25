import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import socketIOClient from "socket.io-client";

import { updateDatas } from 'store/update';
import { updateFriendRequest, validRecommendRequest, deleteFriend } from 'store/actions/friends';

import { loadTopics } from 'store/actions/topics';
import { updateUsers }  from 'store/actions/users'
import { loadFriends } from 'store/actions/friends';

import ProfilPageMobile from './mobile/ProfilPageMobile';

export var socket = socketIOClient('http://localhost:8000/');

const Container = styled.div`
  height : 100%;
`;



class ProfilPage extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      messages : this.props.topics
    }

    this.handleAcceptRequest               = this.handleAcceptRequest.bind(this);
    this.handleIgnoreRequest               = this.handleIgnoreRequest.bind(this);
    this.handleClickValidRecommendFriend   = this.handleClickValidRecommendFriend.bind(this); 
    this.handleClickIgnoreRecommendFriend  = this.handleClickIgnoreRecommendFriend.bind(this); 
    this.handleClickDeleteFriend           = this.handleClickDeleteFriend.bind(this); 

    /* socket = socketIOClient('http://localhost:8000/'); */
    socket.on('topicsData', (datas) =>{
      console.log(datas)
      localStorage.setItem('topics', JSON.stringify(datas));
      this.props.loadTopics(datas);
      /* this.setState({messages : datas}); */
    });

    socket.on('updateUsers', (datas) =>{
      console.log(datas)
      localStorage.setItem('topics', JSON.stringify(datas));
      this.props.updateUsers(datas);
      /* this.setState({messages : datas}); */
    });

    socket.on('friendsData', (friends) =>{
      console.log(friends)
      localStorage.setItem('friends', JSON.stringify(friends));
      this.props.loadFriends(friends);
    });
    
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

  handleClickValidRecommendFriend(id){
    const { user, users } = this.props;
    const email = users[id].email;
    this.props.validRecommendRequest(user._id, id, 2, 5, email);
  }

  handleClickIgnoreRecommendFriend(id){
    const { user, users } = this.props;
    const email = users[id].email;
    this.props.validRecommendRequest(user._id, id, 4, 4, email);
  }

  handleClickDeleteFriend(friendId){
    const { user } = this.props;
    this.props.deleteFriend(user._id, friendId);
  }

  render(){
    const { users, user, friends, history } = this.props;
    console.log(history)
    return(
      <Container>
        <ProfilPageMobile 
          users={users}
          user={user}
          friends={friends}
          accepteRequest={this.handleAcceptRequest}
          ignoreRequest={this.handleIgnoreRequest}
          valideRecommendRequest={this.handleClickValidRecommendFriend}
          ignoreRecommendRequest={this.handleClickIgnoreRecommendFriend}
          deleteFriend={this.handleClickDeleteFriend}
          messages={this.state.messages}
          history={history}
        />
      </Container>
    );
  }
}


export default connect( state => ({
  users : state.users,
  user  : state.user,
  friends : state.friends,
  topics  : state.topics
}), {
  updateDatas,
  updateFriendRequest,
  validRecommendRequest,
  deleteFriend,
  loadTopics,
  updateUsers,
  loadFriends
})(ProfilPage);