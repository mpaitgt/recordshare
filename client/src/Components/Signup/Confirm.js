import React from 'react';
import Card from '../Elements/Card';
import Button from '../Elements/Button';
import Text from '../Elements/Text';
import userauth from '../../Utils/userauth';

class Confirm extends React.Component {

  register = e => {
    e.preventDefault();
    // process form and send to db
    const { values: { username, email, password } } = this.props;
    const newUser = { 
      username: username, 
      email: email, 
      password: password 
    };
    console.log(newUser);
    userauth.userRegister(newUser);
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values } = this.props;

    return (
      <div style={{ width: 'auto', margin: '0 auto', textAlign: 'center' }}>
        <Card>
          <Text variant="h3">Confirm</Text>
          <div>
            <Text variant="label-block">Username</Text>
            <Text variant="p1">{values.username}</Text>

            <Text variant="label-block">Email</Text>
            <Text variant="p1">{values.email}</Text>

            <div>
              <Button onClick={this.back}>Go Back</Button>
              <Button onClick={this.register}>Confirm</Button>
            </div>
          </div>
        </Card>
      </div>
    )
  }


}

export default Confirm;