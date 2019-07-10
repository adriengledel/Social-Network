import React from 'react';
import styled from 'styled-components';

import RowUser from 'components/common/RowUser';

import AddButtonPng from 'components/img/add-button.png';

import { colors, shadows } from 'styles';

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
  width  : 35%;
  height : 100%;
  background-color : ${colors.blueElectron};
  border-bottom-right-radius  : 13px;
  border-top-right-radius     : 3px;
  box-shadow : ${shadows.buttonShadow};

`;

const ChatMessage = styled.div``;

const Head = styled.div`
  border         : 1px solid white;
  height         : 40px;
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

class Forum extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      messages : ['test'],
      showInput : false
    }
    this.handleClickAddTopic = this.handleClickAddTopic.bind(this);
  }

  handleClickAddTopic(event){
    this.setState({ showInput : true });
  }

  render(){
    const {friends=[], topics=['monSujet'], users=[] } = this.props;
    return(
      <Container>
        <Left>
          <AddTopic>
            <AddButton onClick={this.handleClickAddTopic} src={AddButtonPng}/>
            {
              this.state.showInput ?
              <Input 
                placeholder="Saisi le nom du sujet"
              /> :
              <CreateTopic>Créer ton sujet</CreateTopic>
            }
          </AddTopic>
          <ListFriends>
            {
              friends.map(friend => <RowUser user={users[friend.id]}/>)
            }
          </ListFriends>
        </Left>
        <Right>
          <Head>
            {
              topics.map(topic => <ChatTopic>{topic}</ChatTopic>)
            }
          </Head>
          <Body>
            {
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

export default Forum;
