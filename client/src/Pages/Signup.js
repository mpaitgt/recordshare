import React from 'react';
import Form1 from '../Components/Signup/Form1';
import Form2 from '../Components/Signup/Form2';
import Confirm from '../Components/Signup/Confirm';
import Success from '../Components/Signup/Success';
import {Container} from '../Components/Elements';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password2: ''
    }
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
    const { step, first_name, last_name, email, password, password2 } = this.state;
    const values = { step, first_name, last_name, email, password, password2 };

    switch(step) {
      case 1:
        return <Form1 nextStep={this.nextStep} handleChange={this.handleChange} values={values} />;
      case 2: 
        return <Form2 nextStep={this.nextStep} prevStep= {this.prevStep} handleChange={this.handleChange} values={values} />;
      case 3:
        return <Confirm nextStep={this.nextStep} prevStep= {this.prevStep} values={values} />;
      case 4:
        return <Success />;
      default:
        return <Form1 nextStep={this.nextStep} handleChange={this.handleChange} values={values} />;
    }
  }

  render() {
    return (
      <Container>
        {this.renderForm()}
      </Container>
    )
  }
}

export default SignUp;