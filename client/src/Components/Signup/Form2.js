import React from 'react';
import Card from '../Elements/Card';
import Input from '../Elements/Input';
import Button from '../Elements/Button';
import Text from '../Elements/Text';

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
      <Card align="center">
        <Text variant="h3">Almost there...</Text>
        <form>
          <Text variant="label-block">Email</Text>
          <Input placeholder="email" name="email" type="text" value={values.email} onChange={handleChange}/>
          <Text variant="label-block">Password</Text>
          <Input placeholder="create password" name="password" type="password" value={values.password} onChange={handleChange}/>
          <Text variant="label-block">Re-enter Password</Text>
          <Input placeholder="re-enter password" name="password2" type="password" value={values.password2} onChange={handleChange}/>
          <div>
            <Button margin="0px 20px 0px 0px" onClick={this.back} style={{marginRight: '10px'}}>Go Back</Button>
            <Button onClick={this.continue}>Continue</Button>
          </div>
        </form>
      </Card>
    )
  }
}

export default Form2;