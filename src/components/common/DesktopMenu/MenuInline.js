import React from 'react'
import styled from 'styled-components'
import { colors, typography} from 'styles';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { initState } from 'store/actions/auth';


import {
  LOGIN_PAGE_PATH
} from 'Routes/Paths.js';

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

const ButtonDisconnect = styled.a`
  color           : white;
  text-decoration : none;
  white-space     : nowrap;
  font-size       : ${typography.xlarge}em;
  color           : ${colors.blueElectron};
  padding         : 8px 15px;
  border          : 1px solid white;
  border-radius   : 4px;
  font-weight     : 400;
  margin-right    : 40px;

  :hover {
    color : ${colors.redElectron};
  }

  :active {
    border-color  : ${colors.redElectron};
  }
`;

const Language = styled.div`
  color       : ${colors.textColorLogin};
  font-weight : 400;
  font-size   : ${typography.medium}em;
`;

const ButtonLink = styled(Link)`
  color           : white;
  text-decoration : none;
  white-space     : nowrap;
  font-size       : ${typography.xlarge}em;
  color           : ${colors.blueElectron};
  font-weight     : 400;
  margin-right    : 40px;

  :hover {
    color : ${colors.buttonLogin};
  }
`;

class LoginHeader extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        redirect : false
      }
    this.handleClickDeconnection = this.handleClickDeconnection.bind(this);
  }

  handleClickDeconnection(){
    const { history } = this.props;
    console.log(history);
    localStorage.clear();
    history.push('/');
    this.props.initState();
  }

  render() {
   const { user } = this.props;
    return (
        <Header>
          <LeftElements>
           
          </LeftElements>
          <RightElements>
            <ButtonLink to="/">Acceuil</ButtonLink>
            <ButtonLink to="/about">A propos</ButtonLink>
            {
              user.role === "admin" && user.logged ?
              <ButtonLink to="/admin">Admin</ButtonLink> :
              null
            }
            {
              user.logged ?
              <ButtonDisconnect onClick={this.handleClickDeconnection}>Déconnection</ButtonDisconnect> :
              null
            }
          </RightElements>
        </Header>
    )
  }
}

export default connect(state => ({
  user : state.user ? state.user : {}
}), {initState})(LoginHeader);
