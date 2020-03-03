import React from 'react';
import Card from '../Card/Card';
import Input from '../Input/Input';
import Button from '../Button/Button';

class Form1 extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    const { values, handleChange } = this.props;

    return (
      <div style={{ width: 'auto', margin: '0 auto' }}>
        <Card>
          <h1>Register</h1>
          <form>
            <label>First Name</label>
            <br/>
            <Input name="first_name" value={values.first_name} onChange={handleChange}/>
            <br/>
            <label>Last Name</label>
            <br/>
            <Input name="last_name" value={values.last_name} onChange={handleChange}/>
            <br/>
            <Button onClick={this.continue}>Continue</Button>
          </form>
        </Card>
      </div>
    )
  }


}

export default Form1;