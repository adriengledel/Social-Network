import React from 'react';
import styled from 'styled-components';

import SwitchButton from 'components/common/SwitchButton';
import InputSearch from 'components/common/InputSearch';

const Container = styled.div`
  display : flex;
  flex-direction : column;
  border : 1px solid black;
  flex : 1;
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
      view : 'test'
    }
    this.handleViewChange = this.handleViewChange.bind(this);
  }
  handleViewChange(value){
    this.setState({view : value});
  }
  render(){
    const { className, users } = this.props;
    return(
      <Container className={className}>
        <Head>
          <SwitchContainer>
            <SwitchButton
                items={[
                  {value : 'test', name : 'test'},
                  {value : 'test1', name : 'test1'},
                  {value : 'test2', name : 'test2'}
                ]}
                value={this.state.view}
                onSelect={this.handleLoadTypeChange}
            />
          </SwitchContainer>
          <InputSearch
            showList={true}
            items={users}
          />
        </Head>
        <Content></Content>
      </Container>
    );
  }
}

export default FriendsList;