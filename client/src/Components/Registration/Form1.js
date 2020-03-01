import React from 'react';

class Form1 extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    const { values, handleChange } = this.props;

    return (
      <div>
        <h1>Enter User Details</h1>
        <form>
          <label>First Name</label>
          <br/>
          <input name="first_name" value={values.first_name} onChange={handleChange}/>
          <br/>
          <label>Last Name</label>
          <br/>
          <input name="last_name" value={values.last_name} onChange={handleChange}/>
          <br/>
          <button onClick={this.continue}>Continue</button>
        </form>
      </div>
    )
  }


}

export default Form1;