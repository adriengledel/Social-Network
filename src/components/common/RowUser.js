import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from 'styles';

const Container = styled.div`
  display         : flex;
  flex-direction  : row;
  justify-content : space-between;
  align-items     : center;
  height          : 50px;
  width           : 100%;
  border-bottom   : 1px solid black;
  background-color : ${colors.backgroundHighLight};
`;

const Avatar = styled.img`
  width         : 35px;
  height        : 35px;
  border-radius : 50%;
`;

const Name = styled.div`
  margin-left : 10px;
`;

const Left = styled(Link)`
  display         : flex;
  flex-drection   : row;
  align-items     : center;
  cursor          : pointer;
  text-decoration : none;
  color           : white;
`;

const UserWithoutAvatar = styled.div`
  width           : 30px;
  height          : 30px;
  border-radius   : 50%;
  border          : 1px solid white;
  background-color : salmon;
  text-align      : center;
  margin-right    : 5px;
  display         : flex;
  flex-direction  : column;
  justify-content : center;
  align-items     : center;
  flex-shrink     : 0;
  flex-basis      : 30px;  
`;

const Right = styled.div`
  display         : flex;
  flex-direction  : column;
  justify-content : flex-start;
  align-items     : flex-end;
`;

const LightConnect = styled.div.attrs(({connect}) => ({
  style :{
    backgroundColor : connect ? colors.greenElectron : colors.redElectron
  }
}))`
  border-radius    : 50%;
  width            : 7px;
  height           : 7px;
  background-color : white;
  margin-bottom    : 6px;
  margin-right     : 5px;
`;

const ContainerButton = styled.div`
  display        : flex;
  flex-direction : row;
`;
const Button = styled.div`
  border       : 1px solid black;
  margin-right : 8px;
  padding      : 2px 5px;
  border-radius: 3px;
`;

class RowUser extends React.Component{
  render(){
    const { user={}, buttons, onClickLeft, onClickRight, userId, onClick, noLink } = this.props;

    return(
      <Container onClick={onClick}>
        {
          noLink ?
          <Left>
          {
            user.avatarUrl ?
              <Avatar src={user.avatarUrl || ''}/> :
              <UserWithoutAvatar >
                {(user.firstName   || ' ')[0].toUpperCase()}
                {(user.lastName  || ' ')[0].toUpperCase()}
            </UserWithoutAvatar>
          }
          <Name>
            {user.firstName} {user.lastName}
          </Name>
        </Left> :
        <Left to={`profil/${user._id}`}>
          {
            user.avatarUrl ?
              <Avatar src={user.avatarUrl || ''}/> :
              <UserWithoutAvatar >
                {(user.firstName   || ' ')[0].toUpperCase()}
                {(user.lastName  || ' ')[0].toUpperCase()}
            </UserWithoutAvatar>
          }
          <Name>
            {user.firstName} {user.lastName}
          </Name>
        </Left>
        }
        <Right>
          <LightConnect connect={user.logged}/>
            {
              buttons ?
              <ContainerButton>
                <Button onClick={() => onClickLeft(user._id)}>Accepter</Button>
                <Button onClick={()=>onClickRight(user._id)}>Ignorer</Button>
              </ContainerButton> : null
            }
        </Right>
      </Container>
    );
  }
}

export default RowUser;