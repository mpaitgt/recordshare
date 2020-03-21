import React from 'react';
import Card from '../Card';
import Input from '../Input';
import Button from '../Button';

class Form2 extends React.Component {
  continue = e => {
    e.preventDefault();
    const { values } = this.props;
    if (!values.email || !values.password) {
      alert('Please provide your email and set your password.');
    } else if (values.password !== values.password2) {
      alert('Your passwords must match.');
    } else {
      this.props.nextStep();
    }
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values, handleChange } = this.props;

    return (
      <div style={{ width: 'auto', margin: '0 auto' }}>
        <Card>
          <h1>Register</h1>
          <form>
            <label style={{ display: 'block' }}>Email</label>
            <Input name="email" type="text" value={values.email} onChange={handleChange}/>
            <label style={{ display: 'block' }}>Password</label>
            <Input name="password" type="password" value={values.password} onChange={handleChange}/>
            <label style={{ display: 'block' }}>Re-Enter Password</label>
            <Input name="password2" type="password" value={values.password2} onChange={handleChange}/>
            <Button onClick={this.back}>Go Back</Button>
            <Button onClick={this.continue}>Continue</Button>
          </form>
        </Card>
      </div>
    )
  }


}

export default Form2;