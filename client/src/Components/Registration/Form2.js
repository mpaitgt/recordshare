import React from 'react';

class Form2 extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values, handleChange } = this.props;

    return (
      <div>
        <h1>Form 2!!!</h1>
        <form>
          <label>Email</label>
          <br/>
          <input name="email" value={values.email} onChange={handleChange}/>
          <br/>
          <label>Password</label>
          <br/>
          <input name="password" value={values.password} onChange={handleChange}/>
          <br/>
          <label>Re-Enter Password</label>
          <br/>
          <input name="password2" value={values.password2} onChange={handleChange}/>
          <br/>
          <button onClick={this.back}>Go Back</button>
          <button onClick={this.continue}>Continue</button>
        </form>
      </div>
    )
  }


}

export default Form2;