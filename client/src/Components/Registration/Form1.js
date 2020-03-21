import React from 'react';
import Card from '../Card';
import Input from '../Input';
import Button from '../Button';

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
      <div style={{ width: 'auto', margin: '0 auto' }}>
        <Card>
          <h1>Register</h1>
          <form>
            <label style={{ display: 'block' }}>First Name</label>
            <Input placeholder="first name" name="first_name" type="text" value={values.first_name} onChange={handleChange}/>
            <label style={{ display: 'block' }}>Last Name</label>
            <Input name="last_name" type="text" value={values.last_name} onChange={handleChange}/>
            <Button onClick={this.continue}>Continue</Button>
          </form>
        </Card>
      </div>
    )
  }


}

export default Form1;