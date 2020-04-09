import React from 'react';
import Card from '../Card';
import Button from '../Elements/Button';
import Text from '../Text';
import userauth from '../../Utils/userauth';

class Confirm extends React.Component {
  continue = e => {
    e.preventDefault();
    // process form - send data to DB
    const { values: { first_name, last_name, email, password } } = this.props;
    userauth.userRegister({ first_name, last_name, email, password });
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
            <Text variant="label">First Name</Text>
            <Text variant="h4">{values.first_name}</Text>

            <Text variant="label">Last Name</Text>
            <Text variant="h4">{values.last_name}</Text>

            <Text variant="label">Email</Text>
            <Text variant="h4">{values.email}</Text>

            <div>
              <Button onClick={this.back}>Go Back</Button>
              <Button onClick={this.continue}>Confirm</Button>
            </div>
          </div>
        </Card>
      </div>
    )
  }


}

export default Confirm;