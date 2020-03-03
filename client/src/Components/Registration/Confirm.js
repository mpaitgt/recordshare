import React from 'react';
import Card from '../Card/Card';
import Button from '../Button/Button';
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
      <div style={{ width: 'auto', margin: '0 auto' }}>
        <Card>
          <h1>Confirm</h1>
          <div>
            <label>First Name</label>
            <br/>
            <div>{values.first_name}</div>
            <br/>

            <label>Last Name</label>
            <br/>
            <div>{values.last_name}</div>
            <br/>

            <label>Email</label>
            <br/>
            <div>{values.email}</div>
            <br/>

            <label>Password</label>
            <br/>
            <div>{values.password}</div>
            <br/>

            <Button onClick={this.back}>Go Back</Button>
            <Button onClick={this.continue}>Confirm</Button>
          </div>
        </Card>
      </div>
    )
  }


}

export default Confirm;