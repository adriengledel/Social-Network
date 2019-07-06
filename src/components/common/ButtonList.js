import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import DropDown from 'components/common/DropDown';

import { colors, stacking, shadows } from 'styles.js';

import arrowDropDown from 'components/img/arrow-drop-down.png';
import RowUser       from 'components/common/RowUser';


const DropDownList = styled(DropDown)`

`;

const Button = styled.div.attrs(({error}) => ({
  style : error ? {
    border    : '1px solid #FF4C6E',
    boxShadow : shadows.inputError,
  } : {}
}))`
  flex            : 1;
  display         : flex;
  flex-direction  : row;
  justify-content : space-between;
  align-items     : center;
  cursor          : pointer;
  border-radius   : 4px;
  width           : 150px;
  border          : 1px solid ${colors.borders};
  padding         : 10px;
  background-color: ${colors.blueElectron};
  :hover {
    background-color : ${colors.buttonHover}
  }

  :active {
    background-color : ${colors.buttonMouseDown}
  }
`;


const List = styled.div`
  flex            : 1;
  display         : flex;
  flex-direction  : column;
  justify-content : flex-start;
  overflow        : auto;
  max-height      : 160px;
  position        : absolute;
  width           : 100%;
  box-shadow      : ${shadows.buttonShadow};
  z-index         : 10;
  border-radius   : 5px;
`;

const HeadItem = styled.div`
  text-align       : right;
  border-right     : 1px solid ${colors.borders};
  border-left      : 1px solid ${colors.borders};
  background       : ${colors.lightGreyColor};
`;

const Item = styled.div.attrs(({biggerItem}) => ({
  style : {
      height     : biggerItem ? '80px' : '48px',
      alignItems : biggerItem ? 'flex-start' : 'center',
      paddingLeft : biggerItem ? '10px' : ''

  }
}))`
  text-align       : center;
  border-bottom    : 1px solid ${colors.borders};
  border-right     : 1px solid ${colors.borders};
  border-left      : 1px solid ${colors.borders};
  display          : flex;
  flex-direction   : column;
  justify-content  : center;
  background-color : white;
  z-index          : 10;
  :hover {
    background-color : ${colors.buttonHover};
    font-weight      : 500;
  }
  :active {
    background-color : ${colors.buttonMouseDown};
  }
`;

const Arrow = styled.img`
  flex : 0;
`;

const DefaultListItemContent = styled.div.attrs(({selected}) => ({
  style : selected ? {
    fontWeight : 500
  } : {}
}))``;

const DefaultListItem = ({item, selected}) => <DefaultListItemContent selected={selected}>{item.name}</DefaultListItemContent>;
const DefaultButtonElement = ({value}) => <span>{value.name}</span>;

class Select extends React.Component {
  render() {
    const {
      ButtonElement = DefaultButtonElement,
      DropDownElement = DefaultListItem,
      onSelect,
      value = null,
      items = [],
      users,
      placeholder = '',
      biggerItem,
      id,
      headerList,
      error,
      drawer,
      openModal,
      className,
      dataTestId
    } = this.props;
    console.log(items)
    const selected = items.find(item => item.value === value) || {name : placeholder};
    const handleSelect = (value) => {
      this.buttonReference && this.buttonReference.close();
      onSelect(value);
    }

    return (
      <DropDownList
      ref={ref => this.buttonReference = ref}
      ButtonElement={
        <Button
          id={id}
          error={error}
          className={className}
          >
            <div>Recommander</div>
            <Arrow src={arrowDropDown}/>
          </Button>
        }
        DropDownElement={
            <List>
              {
                items.map(
                  item =>
                    <Item key={item.value} >
                     <RowUser user={users[item.id]}/>
                    </Item>
                )
              }
            </List>
        }
        />
    );
  }
}


export default Select;