import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import LandingPage from 'components/common/LandingPage';
import Avatar      from 'components/common/Avatar';
import Info        from 'components/common/Info';
import InputSearchList from 'components/common/InputSearchList';

import { colors } from 'styles';

import { friendRequest } from 'store/actions/friends';

const Container = styled.div`
  display        : flex;
  flex-direction : column;
  margin-top : 50px;
`;

const Head = styled.div`
  display        : flex;
  flex-direction : column;
`;

const ContainerAvatar = styled.div`
  text-align : center;
`;

const AvatarProfil = styled(Avatar)`
  text-align : center;
  height : 80px;
  width : 80px;
`;

const Informations = styled.div`
  display        : flex;
  flex-direction : column;
  justify-content : flex-start;
`;

const Row = styled.div`
  display       : flex;
  flex-drection : row;
  justify-content : space-between;
  margin-top : 10px;
`;

const ContainerButton = styled.div`
  display : flex;
  flex-direction : row;
  margin-top : 10px;
`;

const Status = styled.div`
  padding : 10px 20px;
  background-color : ${colors.blueElectron};
  border-radius : 5px;
  cursor : pointer;
`;

const Wall = styled.div`
  flex : 1;
  border-radius : 5px;
  background-color : ${colors.backgroundHighLight};
`;

class ProfileUser extends React.Component{
  constructor(props){
    super(props);
    this.handleClickRequestFriend = this.handleClickRequestFriend.bind(this); 
  }
  handleClickRequestFriend(){
    const { id, user } = this.props;

    this.props.friendRequest(user._id, id);
  }
  render(){
    const { users, id, user } = this.props;
    const userProfil = users[id];
    return(
      <LandingPage>
        <Container>
          <Head>
            <ContainerAvatar>
              <AvatarProfil user={userProfil}/>
            </ContainerAvatar>
            <Informations>
              <Row>
                <Info label="Pseudo">{userProfil.pseudo}</Info>
                <Info label="Prénom">{userProfil.firstName}</Info>
                <Info label="Nom">{userProfil.lastName}</Info>
              </Row>
              <Row>
                <Info>{userProfil.email}</Info>
              </Row>
              <Row>
                <Info>{userProfil.genre}</Info>
                <Info label="Age">{userProfil.age} ans</Info>
                <Info>{userProfil.preferences}</Info>
              </Row>
              <Row>
                <Info>{userProfil.presentation}</Info>
                <Info>{userProfil.contactInformation}</Info>
              </Row>
            </Informations>
            <ContainerButton>
            <Status onClick={this.handleClickRequestFriend}>Demander en ami</Status>
            </ContainerButton>
            <InputSearchList 
              placeholder="Liste d'amis"
            />
          </Head>
          <Wall>

          </Wall>
        </Container>
      </LandingPage>
    );
  }
}

export default connect( 
  state => ({
    user  : state.data.user,
    users : state.data.users,
    id : state.router.location.pathname.split('/')[2]
  }), 
  {
    friendRequest
  }
)(ProfileUser);