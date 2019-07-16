import React from 'react'
import styled from 'styled-components'
import { colors, typography} from 'styles';



const Header = styled.div`
  flex            : 0;  
  display         : flex;
  flex-direction  : row;
  justify-content : space-between;
  align-items     : center;
  padding-top     : 30px;
  padding-bottom  : 30px;
`;

const LeftElements = styled.div`
  flex : 0;
`;

const RightElements = styled.div`
  flex : 0;
  display         : flex;
  flex-direction  : row;
  align-items     : center;
  justify-content : flex-end;
`;

const ButtonHeader = styled.a`
  color           : white;
  text-decoration : none;
  white-space     : nowrap;
  font-size       : ${typography.xlarge}em;
  color           : ${colors.textColorLogin};
  font-weight     : 400;
  margin-right    : 40px;

  :hover {
    color : ${colors.buttonLogin};
  }
`;

const ButtonFreeTrial = styled.a`
  color           : white;
  text-decoration : none;
  white-space     : nowrap;
  font-size       : ${typography.xlarge}em;
  color           : ${colors.textColorLogin};
  padding         : 8px 15px;
  border          : 1px solid white;
  border-radius   : 4px;
  font-weight     : 400;
  margin-right    : 40px;

  :hover {
    color : ${colors.buttonLogin};
  }

  :active {
    border-color  : ${colors.buttonLogin};
  }
`;

const Language = styled.div`
  color       : ${colors.textColorLogin};
  font-weight : 400;
  font-size   : ${typography.medium}em;
`;

class LoginHeader extends React.Component {
  render() {
    return (
        <Header>
          <LeftElements>
           
          </LeftElements>
          <RightElements>
            <ButtonHeader href="#">test</ButtonHeader>
            <ButtonHeader href="#">test</ButtonHeader>
            <ButtonFreeTrial href="#">test</ButtonFreeTrial>
          </RightElements>
        </Header>
    )
  }
}

export default LoginHeader
