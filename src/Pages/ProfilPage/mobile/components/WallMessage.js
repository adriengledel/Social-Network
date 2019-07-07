import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import ArrowPng from 'components/img/play.png';
import editPng  from 'components/img/edit.png';
import binPng   from 'components/img/bin.png';

const Container = styled.div`
  display : flex;
  flex-direction : column;
`;

const ContainerResponse = styled.div`
  display : flex;
  flex-direction : column;
  margin-left : 25px;
`;

const Head = styled .div`
  display : flex;
  flex-direction : row;
  align-items : center;
  justify-content : space-between;
`;

const Left = styled.div`
  display : flex;
  flex-direction : row;
  align-items : center;
`;

const Right = styled.div`
  display : flex;
  flex-direction : row;
  align-items : center;
`;

const Sender = styled.div``;

const Recipient = styled.div``;

const Message = styled.div``;

const Date = styled.div``;

const Delete = styled.img`
  width : 20px;
  height : 20px;
  margin : 0 5px;
`;

const Arrow = styled.img`
  width : 15px;
  height : 15px;
  margin : 0 5px;
`;

const Response = styled.div``;

const TextResponse = styled.div`
  text-decoration : underline;
`;

const ZoneText = styled.div`
  display : flex;
  flex-direction : row;
`;

const TextArea = styled.textarea`
  width : 100%;
`;

const PublishButton = styled.div`
  width : 70px;
  background-color : red;
`;

class WallMessage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hover : false,
      showTextArea : false
    }
    this.handleSendResponse = this.handleSendResponse.bind(this);
  }

  handleSendResponse(){
    const { user, sendResponse, message } = this.props;
    const { senderId, text, date, id, responses } = message;
    const subId = (responses || []).length+1;
    sendResponse(user._id, id,`${id}-${subId}`);
    this.setState({showTextArea : false});
  }
  
  render(){
    const{ message, user, users, deleteMessage, value, onChange, sendResponse, walls, deleteResponse } = this.props;
    const { senderId, text, date, id, responses } = message;
    const sender = users[senderId];
    const subId = (responses || []).length+1;
    return(
      <Container 
        onMouseOver={()=>this.setState({hover : true})}
        onMouseLeave={()=>this.setState({hover : false})}
      >
        <Head>
          <Left>
            <Sender>{sender.firstName} {sender.lastName} </Sender>
            <Arrow src={ArrowPng}/>
            <Recipient> {user.firstName} {user.lastName}</Recipient>
          </Left>
          <Right>
          {
            this.state.hover ?
            <>
              <Delete 
                src={binPng}
                onClick={()=> deleteMessage(user._id, id)}
              />
            </> : null
          }
          </Right>
        </Head>
        <Date>{moment(date).format('D MMMM YYYY HH MM')}</Date>
        <Message>{text}</Message>
        {
          responses.map(response => {
            let sender = users[response.senderId];
            console.log(response)
            return <ContainerResponse 
              onMouseOver={()=>this.setState({hover : true})}
              onMouseLeave={()=>this.setState({hover : false})}
            >
              <Head>
                <Left>
                  <Sender>{sender.firstName} {sender.lastName} </Sender>
                  <Arrow src={ArrowPng}/>
                  <Recipient> {user.firstName} {user.lastName}</Recipient>
                </Left>
                <Right>
                {
                  this.state.hover ?
                  <>
                    <Delete 
                      src={binPng}
                      onClick={()=> deleteResponse(user._id, id, `${response.id}`)}
                    />
                  </> : null
                }
                </Right>
              </Head>
              <Date>{moment(date).format('D MMMM YYYY HH MM')}</Date>
              <Message>{response.text}</Message>
          </ContainerResponse>
          })
        }
        <Response>
          {
            !this.state.showTextArea ?
            <TextResponse onClick={()=>this.setState({showTextArea : true})}>Répondre</TextResponse> :
            <ZoneText>
              <TextArea 
                onChange={onChange}
                value={value}
              />
              <PublishButton onClick={this.handleSendResponse}>Envoyer</PublishButton>
            </ZoneText>
          }
        </Response>
      </Container>
    );
  }
}

export default WallMessage;