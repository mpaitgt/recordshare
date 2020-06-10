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
    if (!values.username) {
      alert('You must create a username.');
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
          <Text variant="label-block">Create your username</Text>
          <Input placeholder="jonathan123" name="username" type="text" value={values.username} onChange={handleChange}/>
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