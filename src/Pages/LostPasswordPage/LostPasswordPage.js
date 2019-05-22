import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LandingPage from 'components/common/LandingPage';
import Input from 'components/common/Input';

import { colors, shadows, dimensions, typography} from 'styles.js';


const Form = styled.form`
  display        : flex;
  flex-direction : column;
  margin         : auto 0;
  color          : white;
`;

const HeadTitleForm = styled.p`
  margin-bottom : 28px;
  margin-top    : 0;
  font-size     : ${typography.xxlarge}em;
  font-weight   : 500;
  color         : ${colors.textColorLogin};
`;

const SubTitleForm = styled.div`
  font-size     : 20px;
  color         : ${colors.textColorLogin};
  line-height   : 30px;
  font-weight   : 315;
  margin-bottom : 28px;
`;

const Label = styled.label`
  font-size   : ${typography.small}em;
  margin-top  : 10px;
  margin-left : 10px;
`;

const ErrorMessage = styled.div`
  text-align  : center;
  min-height  : 20px;
  color       : ${colors.errors};
  font-weight : 400;
`;

const Button = styled.input`
  height           : 54px;
  width            : 340px;
  padding          : ${dimensions.boxPadding}px;
  margin           : 22px 0;
  border           : none;
  border-radius    : 5px;
  color            : white;
  font-weight      : 500;
  background-color : ${colors.buttonLogin};
  font-size        : 18px;
  cursor           : pointer;
  outline          : 0;
  :hover {
    background-color : ${colors.buttonLoginHover};
  }
  :active {
    background-color : white;
    color            : ${colors.buttonHighlighText};
    border           : 1px solid ${colors.buttonHighlighText};
  }
  @media(max-width:800px){
      width : 100%;
  }
`;

const SignIn = styled(Link)`
  text-decoration : none;
  font-size       : 14px;
  color           : ${colors.textColorLogin};
  margin-left     : 5px;
  text-align      : center;
  margin-top      : 10px;
  :hover {
    color : ${colors.buttonLogin};
  }
`;

class LostPasswordPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleSubmit         = this.handleSubmit.bind(this);

    this.state = {
      username : '',
    };
  }

  handleUsernameChange(event) {
    this.setState({username : event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    const { onSubmit } = this.props;
    let { username } = this.state;

    username = username.trim();

    if (username) {
      onSubmit(username);
    }
  }

  render() {
    const { errorMessage = ''} = this.props;
    return (
      <LandingPage>
        <Form onSubmit={this.handleSubmit}>
          <HeadTitleForm>Reset Password</HeadTitleForm>
          <SubTitleForm>
            Enter your email address below
            <br/>
            and we'll get you back on track
          </SubTitleForm>
          <Input
            label="Email"
            mediumSizeLabel={true}
            type="email"
            placeholder="Your E-mail"
            name="username"
            value={this.state.username}
            onChange={this.handleUsernameChange}
            />
          <ErrorMessage>{errorMessage}</ErrorMessage>
          <Button type="submit" value="Send" />
          <SignIn to="/">Back to sign in</SignIn>
        </Form>
      </LandingPage>
    );
  }
}
export default LostPasswordPage;
