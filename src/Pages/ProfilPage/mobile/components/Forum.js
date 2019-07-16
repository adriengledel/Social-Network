import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { socket } from 'Pages/ProfilPage/ProfilPage';

import RowUser from 'components/common/RowUser';

import AddButtonPng from 'components/img/add-button.png';
import ValidButtonPng from 'components/img/valid-button.png';
import CrossPng       from 'components/img/delete.png';

import { colors, shadows } from 'styles';

import { createTopic, deleteTopic, addFriendToTopic, joinTopic, messageTopic, deleteMessageTopic, loadTopics } from 'store/actions/topics';

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

const ChatMessage = styled.div`
  color            : white;
  padding          : 10px;
  background-color : ${colors.blueElectron};
  border-radius    : 4px;
  margin-bottom    : 8px;
  margin-right     : 15px;
`;

const Head = styled.div`
  border         : 1px solid white;
  height         : 40px;
  display        : flex;
  flex-direction : row;
`;

const Body = styled.div`
  border         : 1px solid white;
  flex           : 1;
  display        : flex;
  flex-direction : column;
  align-items    : flex-end;
  overflow       : auto;
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
      messages  : (this.props.topics[0] || []).messages,
      showInput : false,
      topic     : '',
      topicId   : '',
      message   : '',
      index     : 0 
    }
    this.handleClickAddTopic    = this.handleClickAddTopic.bind(this);
    this.handleCreateTopic      = this.handleCreateTopic.bind(this);
    this.handleChangeTopic      = this.handleChangeTopic.bind(this);
    this.handleDeleteTopic      = this.handleDeleteTopic.bind(this);
    this.handleAddFriendToTopic = this.handleAddFriendToTopic.bind(this);
    this.handleClickTopic       = this.handleClickTopic.bind(this);
    this.handleJoinRoom         = this.handleJoinRoom.bind(this);
    this.handleChangeMessage    = this.handleChangeMessage.bind(this);
    this.handleSendMessage      = this.handleSendMessage.bind(this);

    socket.on('topicsData', (datas) =>{
      console.log(datas)
      localStorage.setItem('topics', JSON.stringify(datas));
      this.props.loadTopics(datas);
      this.setState({messages : datas});
    });
  }

  componentWillMount(){
    const { topics, messages } = this.props;
    console.log(messages)
    this.setState({ 
      topicId  : (topics[0] || []).topicId,
    })
  }

  handleClickAddTopic(event){
    this.setState({ showInput : true });
  }

  handleChangeTopic(event){
    event.preventDefault();
    this.setState({ topic : event.target.value})
  }

  handleClickTopic(topicId, index){
    this.setState({
      showInput : false,
      topicId   : topicId,
      index
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
    const { topics } = this.props;
    this.props.deleteTopic(topicId);
    this.setState({ topicId :  (topics[0] || []).topicId,});
  }

  handleAddFriendToTopic(userId){
    this.props.addFriendToTopic(this.state.topicId, userId);
  }

  handleJoinRoom(){
    const { user } = this.props;
    this.props.joinTopic(this.state.topicId, user._id);
  }

  handleChangeMessage(event){
    this.setState({message : event.target.value});
  }

  handleSendMessage(){
    const { user } = this.props;
    this.props.messageTopic(this.state.topicId, user._id, 1 , this.state.message);
  }

  

  render(){
    const {friends=[], topics=[], users=[], user, messages } = this.props;
    console.log(messages)
    const adminTopics = topics.filter(topic => topic.adminTopicId === user._id);
    let invited = [];
    const inviteTopics = topics.forEach(topic => {
        topic.inviteId.forEach(invite => {
          if(invite.id === user._id){
            invited.push(topic);
          }
      });
    });
    let confirmed = [];
    const confirmTopics = topics.forEach(topic => {
      topic.confirmId.forEach(confirm => {
        if(confirm.id === user._id){
          confirmed.push(topic);
        }
      });
    });
    const myTopics = [...adminTopics, ...invited, ...confirmed];
    const currentTopic = myTopics.filter(topic => topic.topicId === this.state.topicId);
    let testinvite = [];
    let test = () => {
      console.log('ok')
      for(let i = 0; i<currentTopic[0].inviteId.length; i++){
        console.log(currentTopic[0].inviteId[i].id)
        if(currentTopic[0].inviteId[i].id === user._id){
          testinvite.push(currentTopic[0].inviteId[i].id);
        }
      }
    }
   
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
              myTopics.map((topic, index) => 
              <ChatTopic 
                onClick={()=>this.handleClickTopic(topic.topicId, index)}
              >
                {topic.topic}
                {
                  topic.adminTopicId === user._id ?
                  <DeleteTopic 
                    onClick={() => this.handleDeleteTopic(topic.topicId)} 
                    src={CrossPng}
                  /> : null
                }
              </ChatTopic>)
            }
          </Head>
          <Body>
            {
              invited.length > 0 ?
              <div onClick={this.handleJoinRoom}>rejoindre</div> :
              ((topics.filter(topic => this.state.topicId === topic.topicId)[0] || []).messages || []).map(message => <ChatMessage>{message.message}</ChatMessage>)
            }
          </Body>
          <Footer>
          <AddTopic>
            <Input 
            placeholder="Saisi le message"
            onChange={this.handleChangeMessage}
            />
            <AddButton onClick={this.handleSendMessage} src={ValidButtonPng}/> 
          </AddTopic>
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
  addFriendToTopic,
  joinTopic,
  messageTopic,
  deleteMessageTopic,
  loadTopics
 }
)(Forum);
