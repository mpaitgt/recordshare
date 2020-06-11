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
            <Text variant="p1">
              <strong>Username:</strong> {values.username}
              </Text>
            <Text variant="p1">
              <strong>Email:</strong> {values.email}
            </Text>
            <div>
              <Button margin="0px 20px 0px 0px" onClick={this.back}>Go Back</Button>
              <Button onClick={this.register}>Confirm</Button>
            </div>
          </div>
        </Card>
      </div>
    )
  }


}

export default Confirm;