import React from 'react';
import Form1 from './Form1';
import Form2 from './Form2';
import Confirm from './Confirm';
import Success from './Success';

class RegistrationForm extends React.Component {
  state = {
    step: 1,
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password2: ''
  }

  // proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 })
  }

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 })
  }

  // handle fields change
  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    const { step, first_name, last_name, email, password, password2 } = this.state;
    const values = { step, first_name, last_name, email, password, password2 };

    switch(step) {
      case 1:
        return (
          <Form1 
            nextStep={this.nextStep} 
            handleChange={this.handleChange} 
            values={values} 
          />
        )
      case 2: 
        return (
          <Form2 
            nextStep={this.nextStep} 
            prevStep= {this.prevStep} 
            handleChange={this.handleChange} 
            values={values} 
          />
        )
      case 3:
        return (
          <Confirm 
            nextStep={this.nextStep} 
            prevStep= {this.prevStep}
            values={values} 
          />
        )
      case 4:
        return (
          <div>Success</div>
        )
    }
  }
}

export default RegistrationForm;