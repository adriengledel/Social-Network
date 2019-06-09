import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import SwitchButton from 'components/common/SwitchButton';
import LandingPage from 'components/common/LandingPage';
import InputSearchList from 'components/common/InputSearchList';
import FriendsList from './components/FriendsList';

const Container = styled.div`

`;

const Head = styled.div`
  margin-top : 50px;
`;

const Content = styled.div`
  margin-top : 50px;
  flex : 1;
`;

const SwitchContainer = styled.div`
  height      : 50px;
  font-weight : 450;
`;

class ProfilPageMobile extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value : 'test'
    }
    this.handleViewChange = this.handleViewChange.bind(this);
  }
  handleViewChange(value){
    this.setState({value});
  }
  render(){
    const { users } = this.props;
    const usersItems = Object.values(users);
    return(
      <LandingPage>
        <Container>
          <Head>
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
              items={usersItems}
            />
          </Head>
          <Content>
            <FriendsList 
              users={usersItems}
            />
          </Content>
        </Container>
      </LandingPage>
    );
  }
}

export default connect( state => ({users : state.data.users}))(ProfilPageMobile);

