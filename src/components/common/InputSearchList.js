import React from 'react';
import styled from 'styled-components';

import SearchImgPng from 'components/img/icon-search.png';
import RowUser      from 'components/common/RowUser';

import { colors } from 'styles';

const Container = styled.div`
  width : 100%;
  border-bottom : 1px solid black;
  display : flex;
  flex-direction : column;
  justify-content : center;
  margin-top : 15px;
`;

const ContainerInput = styled.div`
  display : flex;
  flex-direction : row;
  align-items : center;
`;
  
const Input = styled.input`
  border  : none;
  width   : 100%;
  outline : none;
  height  : 30px;
  background-color : ${colors.background};
`;

const SearchImg = styled.img`
  width        : 15px;
  height       : 15px;
  margin-right : 10px;
`;

const ContainerList = styled.div``;

const List = styled.div`
  position : absolute;
  width : 90%;
  top : 163px;
  height : 300px;
  overflow : auto;
`;

const ListFriends = styled.div``;

const Row = styled.div`

`;

class InputSearch extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showList : false
    }
    this.handleFocusInput = this.handleFocusInput.bind(this);

  }
  
  handleFocusInput(){
    this.setState({showList : !this.state.showList});
  }

  render(){
    const { items=[], onChange, placeholder } = this.props;
    return(
      <Container>
        <ContainerInput>
          <SearchImg 
            src={SearchImgPng}
          />
          <Input 
            placeholder={placeholder}
            onFocus={this.handleFocusInput}
            onChange={onChange}
          />
        </ContainerInput>
        <ContainerList  onBlur={this.handleFocusInput}>
        {
          this.state.showList ?
            <List>
              {
                items.map(item => <RowUser key={item._id} user={item}/> )
              }
            </List> : null
        }
        </ContainerList>
      </Container>

    );
  }
}

export default InputSearch;