import React from 'react';
import Form1 from '../Components/Signup/Form1';
import Form2 from '../Components/Signup/Form2';
import Confirm from '../Components/Signup/Confirm';
import {NewUserSuccess} from '../Components/Success';
import {Container, Image, Text} from '../Components/Elements';
import image from '../Images/record-listening.jpg';
import styled from '@emotion/styled';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  justify-items: start;
  grid-gap: 50px;
`;

const Blurb = styled.div`
  border-top: 1px solid black;
  max-width: 400px;
  text-align: center;
  padding-top: 20px;
`;

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      username: '',
      email: '',
      password: '',
      password2: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }
  
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 })
  }

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 })
  }

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value })
  }

  renderForm = () => {
    const { step, username, email, password, password2 } = this.state;
    const values = { step, username, email, password, password2 };

    switch(step) {
      case 1:
        return <Form1 nextStep={this.nextStep} handleChange={this.handleChange} values={values} />;
      case 2: 
        return <Form2 nextStep={this.nextStep} prevStep= {this.prevStep} handleChange={this.handleChange} values={values} />;
      case 3:
        return <Confirm nextStep={this.nextStep} prevStep= {this.prevStep} values={values} />;
      case 4:
        return <NewUserSuccess />;
      default:
        return <Form1 nextStep={this.nextStep} handleChange={this.handleChange} values={values} />;
    }
  }

  render() {
    return (
      <Container>
        <Grid>
          <Image src={image} alt="record-flipping" width="400px" height="auto"/>
          <div>
          {this.renderForm()}
            <Blurb>
              <Text variant="p1">
                Recordshare is the place where you can come and share the records that mean something to you, and help others find the meaning in them too.
              </Text>
            </Blurb>
          </div>
        </Grid>
      </Container>
    )
  }
}

export default SignUp;