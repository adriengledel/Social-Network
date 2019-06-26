import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SwitchButton from 'components/common/SwitchButton';
import LandingPage from 'components/common/LandingPage';
import InputSearchList from 'components/common/InputSearchList';
import FriendsList from './components/FriendsList';
import Avatar      from 'components/common/Avatar';

import { colors } from 'styles';

const Container = styled.div`

`;

const Head = styled.div`
  margin-top : 50px;
`;

const Content = styled.div`
  margin-top : 50px;
  flex : 1;
  background-color : ${colors.background};
`;

const SwitchContainer = styled.div`
  height      : 50px;
  font-weight : 450;
`;

const User = styled(Link)`
  display : flex;
  flex-direction : row;
  align-items : center;
  margin-bottom : 20px;
  text-decoration : none;
  color : white;
`;

class ProfilPageMobile extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value : 'test',
      filter : ''
    }
    this.handleViewChange = this.handleViewChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleViewChange(value){
    this.setState({value});
  }

  handleSearch(event){
    this.setState({filter : event.target.value})
  }

  render(){
    const { users, user, friends, accepteRequest, ignoreRequest } = this.props;
    const usersItems = Object.values(users);
    const filteredItems = usersItems.filter(
      item => item.firstName.toLowerCase().includes(this.state.filter.trim().toLowerCase()) || 
              item.lastName.toLowerCase().includes(this.state.filter.trim().toLowerCase())
    );
    return(
      <LandingPage>
        <Container>
          <Head>
            <User to={`profil/${user._id}`}>
              <Avatar user={user} /> 
              {user.pseudo}
            </User>
            <SwitchContainer>
              <SwitchButton
                items={[
                  {value : 'test', name : 'test'},
                  {value : 'test1', name : 'test1'},
                  {value : 'test2', name : 'test2'}
                ]}
                value={this.state.value}
                onSelect={this.handleViewChange}
              />
            </SwitchContainer>
            <InputSearchList 
              items={filteredItems}
              onChange={this.handleSearch}
              placeholder="Rechercher"
            />
          </Head>
          <Content>
            <FriendsList
              user={user} 
              users={users}
              friends={friends}
              accepteRequest={accepteRequest}
              ignoreRequest={ignoreRequest}
            />
          </Content>
        </Container>
      </LandingPage>
    );
  }
}

export default ProfilPageMobile;

