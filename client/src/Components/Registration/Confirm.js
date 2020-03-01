import React from 'react';

class Confirm extends React.Component {
  continue = e => {
    e.preventDefault();
    // process form - send data to DB
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values } = this.props;

    return (
      <div>
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

          <button onClick={this.back}>Go Back</button>
          <button onClick={this.continue}>Confirm</button>
        </div>
      </div>
    )
  }


}

export default Confirm;