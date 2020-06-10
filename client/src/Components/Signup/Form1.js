import React from 'react';
import Path from '../Elements/Path';
import Card from '../Elements/Card';
import Input from '../Elements/Input';
import Button from '../Elements/Button';
import Text from '../Elements/Text';

class Form1 extends React.Component {
  continue = e => {
    e.preventDefault();
    const { values } = this.props;
    if (!values.first_name || !values.last_name) {
      alert('You must fill in your first and last name.');
    } else {
      this.props.nextStep();
    }
  }

  render() {
    const { values, handleChange } = this.props;

    return (
      <Card>
        <Text variant="h2">Sign Up</Text>
        <form>
          <Text variant="label-block">First Name</Text>
          <Input placeholder="Jon" name="first_name" type="text" value={values.first_name} onChange={handleChange}/>
          <Text variant="label-block">Last Name</Text>
          <Input placeholder="Doe" name="last_name" type="text" value={values.last_name} onChange={handleChange}/>
          <div>
            <Button onClick={this.continue}>Continue</Button>
          </div>
        </form>
        <Text variant="p2">
          Already have an account?<br/>
          <Path to="/login">Login here.</Path>
        </Text>
      </Card>
    )
  }


}

export default Form1;