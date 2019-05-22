import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import capitalize from 'capitalize';
import API from 'utils/API';

import LandingPage from 'components/common/LandingPage';
import Input from 'components/common/Input';
import Checkbox from 'components/common/Checkbox';
import TextArea from 'components/common/TextArea';

import {addUser} from 'store/actions/user';

import { typography, colors } from 'styles';

const Container = styled.div`
    flex : 1;
    display : flex;
    flex-direction : column;
    color : white;
    @media(max-width:1100px){
        font-size : 0.7em;
        margin-top : 30px;
    }
    @media(max-width:850px){
        font-size : 0.6em;
        margin-top : 30px;
    }
    @media(max-width:800px){
        font-size : 0.6em;
        margin-top : 30px;
    }
    @media(max-width:700px){
        font-size : 0.5em;
        margin-top : 30px;
    }
    @media(max-width:600px){
        font-size : 0.7em;
    }
`;
 
const ContainerForm = styled.form`
    flex : 1;
    display : flex;
    flex-direction : row;
    align-items : center;
    flex-wrap : wrap;
`;

const AddAvatar = styled.div`
  display        : flex;
  flex-direction : row;
  align-items    : center;
  padding-top: 60px;

  @media(max-width:470px){
    padding-top: 30px;
}

`;

const InputFile = styled.div`
  display : none;
`;

const Avatar = styled.div`
  width            : 50px;
  height           : 50px;
  background-color : ${colors.buttonLogin};
  border-radius    : 25px;
  overflow         : hidden;
`;

const Img = styled.img`
  width  : 100%;
  height : 100%;
`;

const Label = styled.label`
  cursor          : pointer;
  color           : ${colors.buttonLogin};
  font-weight     : 400;
  text-decoration : underline;
  margin-left     : -50px;
  padding-left    : 70px;
  height          : 50px;
  vertical-align  : middle;
  line-height     : 50px;
`;

const Title = styled.div`
    font-size : ${typography.huge}em;
    text-align : center;
`;
const Right = styled.div`
    min-width      : 270px;
    width          : 50%;
    flex           : 1;
    display        : flex;
    flex-direction : column;
    margin-left    : 10px;

    @media(max-width:675px){
        margin-left : 0px;
    }
`;
const Left = styled.div`
    min-width      : 270px;
    width          : 50%;
    flex           : 1;
    display        : flex;
    flex-direction : column;
    margin-right   : 10px;

    @media(max-width:675px){
        margin-right : 0px;
    }

`;

const TwiceInput = styled.div`
    display         : flex;
    flex-direction  : row;
    align-items     : center;
    width           : 50%;
    justify-content : space-between;
`;

const Row = styled.div`
    display         : flex;
    flex-direction  : row;
    align-items     : flex-end;
    justify-content : space-between;
    margin-top      : 40px;
    height          : 50px;

    @media(max-width:470px){
        margin-top : 20px;
    }
`;

const CheckboxRow = styled.div`
    display         : flex;
    flex-direction  : row;
    align-items     : center;
    justify-content : space-between;
    margin-top      : 40px;
    height          : 50px;

    @media(max-width:470px){
        margin-top : 20px;
    }
`;

const LastRow = styled.div`
    display         : flex;
    flex-direction  : row;
    align-items     : flex-end;
    justify-content : space-between;
    margin-top      : 20px;
    height          : 100px;
`;

const InputSmallLeft = styled.div`
    margin-right : 5px;
    width        : 100%;
`;

const InputSmallRight = styled.div`
    margin-left : 5px;
    width       : 100%;
`;

const InputAge = styled(Input)`
    width   : 70px;
    min-height : 30px;
    padding : 0px !important;
    border  : 1px;
    margin-bottom : 15px;
`;

const Button = styled.input`
  width            : 100%;
  padding          : 2%;
  margin           : 7% 0px 0px;
  border           : none;
  border-radius    : 5px;
  color            : white;
  font-weight      : 500;
  background-color : ${colors.blueElectron};
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
  @media(max-width : 601px) {
    width : 100%;
  }
  @media(max-width : 601px) {
    padding          : 3%;
  }
`;

const Red = styled.div`
  color : ${colors.redElectron};
`;

class FormConnection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pseudo : '',
            pseudoError : false,
            firstName : '',
            firstNameError : false,
            lastName : '',
            lastNameError : false,
            password : '',
            passwordError : '',
            confirmation : '',
            confirmationError : '',
            age : '',
            ageError : false,
            mail : '',
            mailError : false,
            genre : '',
            maleChecked : false,
            femaleChecked : false,
            genreError : false,
            avatarUrl : '',
            avatarFile : '',
            presentation : '',
            preferences : '',
            contactInformation : '',
            error : false
        }
        this.handleAvatarChange          = this.handleAvatarChange.bind(this);
        this.handlePseudoChange          = this.handlePseudoChange.bind(this);
        this.handleFirstNameChange       = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange        = this.handleLastNameChange.bind(this);
        this.handlePasswordChange        = this.handlePasswordChange.bind(this);
        this.handleConfirmationChange    = this.handleConfirmationChange.bind(this);
        this.handleCheckboxCodeurChange  = this.handleCheckboxCodeurChange.bind(this);
        this.handleCheckboxCodeuseChange = this.handleCheckboxCodeuseChange.bind(this);
        this.handleAgeChange             = this.handleAgeChange.bind(this);
        this.handleMailChange            = this.handleMailChange.bind(this);
        this.handleGenreChange           = this.handleGenreChange.bind(this);
        this.handleAvatarChange          = this.handleAvatarChange.bind(this);
        this.handlePresentationChange    = this.handlePresentationChange.bind(this);
        this.handlePreferencesChange     = this.handlePreferencesChange.bind(this);
        this.handleContactInformationChange = this.handleContactInformationChange.bind(this);
        this.handleSubmit                = this.handleSubmit.bind(this);
    }

    handleAvatarChange (event) {
        const file = event.target.files[0] || null;
    
        if(file) {
          this.setState({
            avatarUrl  : URL.createObjectURL(file),
            avatarFile : file
          });
        }
      }

    handlePseudoChange(event){
        this.setState({
            pseudo : event.target.value,
            pseudoError : false
        });
    }

    handleFirstNameChange(event){
        this.setState({
            firstName : event.target.value,
            firstNameError : false
        });  
    }

    handleLastNameChange(event){
        this.setState({
            lastName : event.target.value,
            lastNameError : false
        });  
    }

    handlePasswordChange(event){
        this.setState({
            password : event.target.value,
            passwordError : false
        });
    }

    handleConfirmationChange(event){
        this.setState({
            confirmation : event.target.value,
            confirmationError : false
        });
    }

    handleCheckboxCodeurChange(){
        if(this.state.maleChecked){
            this.setState({
                maleChecked : !this.state.maleChecked,
                femaleChecked : false,
                genre : ''
            });
        }
        else{
            this.setState({
                maleChecked : !this.state.maleChecked,
                femaleChecked : false,
                genre : 'Codeur'
            });
        }
    }

    handleCheckboxCodeuseChange(){
        if(this.state.femaleChecked){
            this.setState({
                femaleChecked : !this.state.femaleChecked,
                maleChecked : false,
                genre : ''
            });
        }
        else{
            this.setState({
                femaleChecked : !this.state.femaleChecked,
                maleChecked : false,
                genre : 'Codeuse'
            });
        }
    }

    handleAgeChange(event){
        this.setState({
            age : event.target.value,
            ageError : false
        });  
    }

    handleMailChange(event){
        this.setState({
            mail : event.target.value,
            mailError : false
        }); 
    }

    handleGenreChange(event){
        this.setState({
            genre : event.target.value,
            genreError : false
        });  
    }
    
    handlePresentationChange(event){
        this.setState({presentation : event.target.value}); 
    }

    handlePreferencesChange(event){
        this.setState({preferences : event.target.value});  
    }

    handleContactInformationChange(event){
        this.setState({contactInformation : event.target.value});
    }

    handleSubmit() {
    
         let {
            pseudo,
            firstName,
            lastName,
            password,
            confirmation,
            age,
            mail,
            genre,
            avatarUrl,
            avatarFile,
            presentation,
            preferences
        } = this.state;
    
        firstName     = capitalize(firstName.trim());
        lastName    = capitalize(lastName.trim());
    
        let hasError = false;

        if (!pseudo) {
            this.setState({pseudoError : true});
            hasError = true;
          }
    
        if (!firstName) {
          this.setState({firstNameError : true});
          hasError = true;
        }
    
        if (!lastName) {
          this.setState({lastNameError : true});
          hasError = true;
        }
    
        if (!age) {
          this.setState({ageError : true});
          hasError = true;
        }
    
        if (!mail) {
          this.setState({mailError : true});
          hasError = true;
        }
    
        if (!genre) {
            this.setState({genreError : true});
            hasError=true;
        } 
    
        if (hasError) {
            this.setState({error : true});
            return;
        } else{
            this.setState({error : false});
            const user = {
                pseudo       : this.state.pseudo,
                firstName    : this.state.firstName,
                lastName     : this.state.lastName,
                password     : this.state.password,
                age          : this.state.age,
                mail         : this.state.mail,
                genre        : this.state.genre,
                avatarUrl    : this.state.avatarUrl,
                avatarFile   : this.state.avatarFile,
                presentation : this.state.presentation,
                preferences  : this.state.preferences,
                contactInformation : this.state.contactInformation
            }
            API.signup(user);
        }

        /* this.props.addUser(user); */
    
      }

    render() {
        const { errorMessage="Veuillez remplir les informations demandées signalées en rouge" } = this.props;
        return (
            <LandingPage>
                <Container>
                    <Title>Inscription</Title>
                    <AddAvatar>
                        <InputFile>
                        <Input
                            ref={this.picture}
                            id="file"
                            type="file"
                            onChange={this.handleAvatarChange}
                            accept="image/*"
                        />
                        </InputFile>
                        <Avatar>
                        {
                            this.state.avatarUrl ?
                            <Img src={this.state.avatarUrl}/> : null
                        }
                        </Avatar>
                        <Label htmlFor="file">Avatar</Label>
                    </AddAvatar>
                    <ContainerForm>
                        <Left>
                            <Row>
                                <Input
                                    label="Pseudonyme"
                                    onChange={this.handlePseudoChange}
                                    error={this.state.pseudoError}
                                />
                            </Row>
                            <Row>
                                <InputSmallLeft>
                                    <Input
                                        label="Nom"
                                        onChange={this.handleLastNameChange}
                                        error={this.state.lastNameError}
                                    />
                                </InputSmallLeft>
                                <InputSmallRight>
                                    <Input
                                        label="Prénom"
                                        onChange={this.handleFirstNameChange}
                                        error={this.state.firstNameError}
                                    />
                                </InputSmallRight> 
                            </Row>
                            <Row>
                                <InputSmallLeft>
                                    <Input
                                        label="Mot de passe"
                                        onChange={this.handlePasswordChange}
                                        error={this.state.passwordError}
                                    />
                                </InputSmallLeft>
                                <InputSmallRight>
                                    <Input
                                        label="Confirmation"
                                        onChange={this.handleConfirmationChange}
                                        error={this.state.pseudoError}
                                    />
                                </InputSmallRight> 
                            </Row>
                            <LastRow>  
                                <TextArea 
                                    label="Présentation"
                                    onChange={this.handlePresentationChange}
                                />
                            </LastRow>
                        </Left>
                        <Right>
                            <Row>
                                <Input
                                    label="Mail"
                                    onChange={this.handleMailChange}
                                    error={this.state.mailError}
                                />
                            </Row>
                            <CheckboxRow>
                                <TwiceInput>
                                    <Checkbox 
                                        checked={this.state.maleChecked}
                                        onToggle={this.handleCheckboxCodeurChange}
                                        value="Codeur"
                                    />Codeur
                                    <Checkbox 
                                        checked={this.state.femaleChecked}
                                        onToggle={this.handleCheckboxCodeuseChange}
                                        value="Codeuse"
                                    />Codeuse
                                </TwiceInput>
                                <InputAge 
                                    label="Age"
                                    onChange={this.handleAgeChange}
                                    error={this.state.ageError}
                                />
                            </CheckboxRow>
                            <Row>
                                <Input
                                    label="Coordonnées"
                                    onChange={this.handleContactInformationChange}
                                    error={this.state.contactInformationError}
                                />
                            </Row>
                            <LastRow>
                                <TextArea
                                    label="Préférences"
                                    onChange={this.handlePreferencesChange}
                                />
                            </LastRow>
                        </Right>
                    </ContainerForm>
                        {
                            this.state.error ?
                            <Red>{errorMessage}</Red> : null
                        }
                        <Button type="submit" value="Envoyer" onClick={this.handleSubmit} />
                </Container>
            </LandingPage>
        );
    }
}

export default connect(null, {addUser})(FormConnection);

/* pseudonym email coordonnées nom genre photo prénom age présentation préférences... */
