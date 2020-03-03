import React from 'react';
import Card from '../Card/Card';
import Input from '../Input/Input';
import Button from '../Button/Button';

class Form2 extends React.Component {
  continue = e => {
    e.preventDefault();
    const { values } = this.props;
    if (values.password !== values.password2) {
      alert('Your passwords must match');
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
            <label>Email</label>
            <br/>
            <Input name="email" value={values.email} onChange={handleChange}/>
            <br/>
            <label>Password</label>
            <br/>
            <Input name="password" type="password" value={values.password} onChange={handleChange}/>
            <br/>
            <label>Re-Enter Password</label>
            <br/>
            <Input name="password2" type="password" value={values.password2} onChange={handleChange}/>
            <br/>
            <Button onClick={this.back}>Go Back</Button>
            <Button onClick={this.continue}>Continue</Button>
          </form>
        </Card>
      </div>
    )
  }


}

export default Form2;