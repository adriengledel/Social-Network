import React from 'react';
import styled from 'styled-components';

import SwitchButton from 'components/common/SwitchButton';
import InputSearch  from 'components/common/InputSearch';


const Container = styled.div`
  flex           : 1;
  display        : flex;
  flex-direction : column;
  border         : 1px solid black;
`;

const Head = styled.div`
`;

const Content = styled.div`
  flex : 1;
`;

const SwitchContainer = styled.div`
  height      : 40px;
  font-weight : 450;
`;

class FriendsList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      view : 'test',
      filter : ''
    }
    this.handleViewChange = this.handleViewChange.bind(this);
    this.handleSearch     = this.handleSearch.bind(this);
    this.handleClickUser  = this.handleClickUser.bind(this);
  }
  handleViewChange(value){
    this.setState({view : value});
  }

  handleSearch(event){
    this.setState({filter : event.target.value})
  }

  handleClickUser(){

  }

  render(){
    const { className, users, friends = {} } = this.props;
    /* const friendsItems = Object.values(friends);
    const filteredItems = friendsItems.filter(
      item => item.firstName.toLowerCase().includes(this.state.filter.trim().toLowerCase()) || 
              item.lastName.toLowerCase().includes(this.state.filter.trim().toLowerCase())
    ); */

    return(
      <Container className={className}>
        <Head>
          <SwitchContainer>
            <SwitchButton
                items={[
                  {value : 'Amis', name : 'Amis'},
                  {value : 'En attente de confirmation', name : 'En attente de confirmation'},
                  {value : 'Demande reçu', name : 'Demande reçu'}
                ]}
                value={this.state.view}
                onSelect={this.handleLoadTypeChange}
            />
          </SwitchContainer>
          <InputSearch
            showList={true}
           /*  items={filteredItems} */
            onChange={this.handleSearch}
          />
        </Head>
        <Content>
          {
            /* friends.map(friend => ) */
          }
        </Content>
      </Container>
    );
  }
}

export default FriendsList;