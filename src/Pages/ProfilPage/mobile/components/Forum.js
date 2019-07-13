import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import RowUser from 'components/common/RowUser';

import AddButtonPng from 'components/img/add-button.png';
import ValidButtonPng from 'components/img/valid-button.png';
import CrossPng       from 'components/img/delete.png';

import { colors, shadows } from 'styles';

import { createTopic, deleteTopic, addFriendToTopic } from 'store/actions/topics';
import { SSL_OP_TLS_BLOCK_PADDING_BUG } from 'constants';

const Container = styled.div`
  display        : flex;
  flex-direction : row;
  border         : 1px solid white;
  height         : 500px;
`;

const Left = styled.div`
  display        : flex;
  flex-direction : column;
  border         : 1px solid white;
  width          : 40%;
`;

const AddTopic = styled.div`
  display        : flex;
  flex-direction : row;
  align-items    : center;
  border         : 1px solid white;
  height         : 40px;
`;

const AddButton = styled.img`
  width : 30px
  height : 30px;
`;

const CreateTopic = styled.div`
  margin-left : 10px;
`;

const ListFriends = styled.div`
  display        : flex;
  flex-direction : column;
  border         : 1px solid white;
`;

const Right = styled.div`
  flex           : 1;
  display        : flex;
  flex-direction : column;
  border         : 1px solid white;
`;

const ChatTopic = styled.div`
  display          : flex;
  flex-direction   : row;
  justify-content  : space-around;
  align-items      : center;
  width            : 35%;
  height           : 100%;
  background-color : ${colors.blueElectron};
  box-shadow       : ${shadows.buttonShadow};
  border-bottom-right-radius  : 13px;
  border-top-right-radius     : 3px;

`;

const ChatMessage = styled.div``;

const Head = styled.div`
  border         : 1px solid white;
  height         : 40px;
  display        : flex;
  flex-direction : row;
`;

const Body = styled.div`
  border         : 1px solid white;
  flex           : 1;
`;

const Footer = styled.div`
  border         : 1px solid white;
  flex           : 0;
`;

const Input = styled.input`
  background-color : ${colors.backgroundHighLight};
  border : none;
  padding : 5px 0;
  outline : none;
  width : 100%;
  
  focus {
    padding-left : 20px;
  }
`;

const DeleteTopic = styled.img`
  width : 15px;
  height : 15px;
`;

class Forum extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      messages  : ['test'],
      showInput : false,
      topic     : '',
      topicId   : ''
    }
    this.handleClickAddTopic    = this.handleClickAddTopic.bind(this);
    this.handleCreateTopic      = this.handleCreateTopic.bind(this);
    this.handleChangeTopic      = this.handleChangeTopic.bind(this);
    this.handleDeleteTopic      = this.handleDeleteTopic.bind(this);
    this.handleAddFriendToTopic = this.handleAddFriendToTopic.bind(this);
    this.handleClickTopic       = this.handleClickTopic.bind(this);
  }

  componentWillMount(){
    const { topics } = this.props;
    this.setState({ topicId : topics[0].topicId})
  }

  handleClickAddTopic(event){
    this.setState({ showInput : true });
  }

  handleChangeTopic(event){
    this.setState({ topic : event.target.value})
  }

  handleClickTopic(topicId){
    this.setState({
      showInput : false,
      topicId   : topicId
    });
  }

  handleCreateTopic(){
    const { user } = this.props;
    this.setState({
      showInput : false,
      topicId   : user._id+this.state.topic
    });
    this.props.createTopic(user._id, this.state.topic, user._id+this.state.topic);
  }

  handleDeleteTopic(topicId){
    this.props.deleteTopic(topicId);
  }

  handleAddFriendToTopic(userId){
    this.props.addFriendToTopic(this.state.topicId, userId);
  }

  render(){
    const {friends=[], topics=[], users=[], user } = this.props;
    const adminTopics = topics.filter(topic => topic.adminTopicId === user._id);
    let tab = [];
    const inviteTopics = topics.forEach(topic => {
        topic.inviteId.forEach(invite => {
          if(invite.id === user._id){
            tab.push(topic);
          }
      });
    });
    const myTopics = [...adminTopics, ...tab];
    const currentTopic = myTopics.filter(topic => topic.topicId === this.state.topicId);
    let testTab = [];
    let test = () => {
      console.log('ok')
      for(let i = 0; i<currentTopic[0].inviteId.length; i++){
        console.log(currentTopic[0].inviteId[i].id)
        if(currentTopic[0].inviteId[i].id === user._id){
          testTab.push(currentTopic[0].inviteId[i].id);
        }
      }
    }
    console.log(tab)
    return(
      <Container>
        <Left>
            {
              this.state.showInput ?
              <AddTopic>
                <Input 
                placeholder="Saisi le nom du sujet"
                onChange={this.handleChangeTopic}
                />
                <AddButton onClick={this.handleCreateTopic} src={ValidButtonPng}/> 
              </AddTopic> :
              <AddTopic>
                <AddButton onClick={this.handleClickAddTopic} src={AddButtonPng}/>
                <CreateTopic>Créer ton sujet</CreateTopic>
              </AddTopic>
            }
          <ListFriends>
            {
              friends.map(friend => <RowUser onClickAdd={() => this.handleAddFriendToTopic(friend.id)} addButton user={users[friend.id]}/>)
            }
          </ListFriends>
        </Left>
        <Right>
          <Head>
            {
              myTopics.map(topic => <ChatTopic onClick={()=>this.handleClickTopic(topic.topicId)}>{topic.topic}<DeleteTopic onClick={() => this.handleDeleteTopic(topic.topicId)} src={CrossPng}/></ChatTopic>)
            }
          </Head>
          <Body>
            {
              tab.length > 0 ?
              <div>rejoindre</div> :
              this.state.messages.map(message => <ChatMessage />)
            }
          </Body>
          <Footer>
            <Input />
          </Footer>
        </Right>
      </Container>
    );
  }
}

export default connect(state => ({
  user : state.user,
  topics : state.topics
}), 
{ 
  createTopic,
  deleteTopic,
  addFriendToTopic
 }
)(Forum);
