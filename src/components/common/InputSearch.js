import React from 'react';
import styled from 'styled-components';

import SearchImgPng from 'components/img/icon-search.png';

import { colors } from 'styles';

const Container = styled.div`
  width : 100%;
  border-bottom : 1px solid black;
  display : flex;
  flex-direction : column;
  justify-content : center;
  margin-top : 30px;
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
  width : 100%;
  height : 300px;
  background-color : white;
  overflow : auto;
`;


const Row = styled.div`

`;

class InputSearch extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showList : false
    }
    this.handleFocusInput = this.handleFocusInput.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);

  }
  handleChangeInput(event){
    const value = event.target.value;
  }

  handleFocusInput(){
    console.log('input')
    this.setState({showList : !this.state.showList});
  }

  render(){
    const { items=[], showList } = this.props;
    return(
      <Container>
        <ContainerInput  onBlur={this.handleFocusInput}>
          <SearchImg 
            src={SearchImgPng}
          />
          <Input 
            placeholder='Rechercher'
            onChange={this.handleChangeInput}
            onFocus={this.handleFocusInput}
           
          />
        </ContainerInput>
        <ContainerList>
          <List>
            {
              items.map(item => <Row key={item._id}>{item.pseudo}</Row> )
            }
          </List>
        </ContainerList>
      </Container>

    );
  }
}

export default InputSearch;