import React from 'react';
import Card from '../Card';
import Input from '../Input';
import Button from '../Button';
import Text from '../Text';

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
      <div style={{ width: 'auto', margin: '0 auto', textAlign: 'center' }}>
        <Card>
          <Text variant="h3">Register</Text>
          <form>
            <Text variant="label">First Name</Text>
            <Input placeholder="Jon" name="first_name" type="text" value={values.first_name} onChange={handleChange}/>
            <Text variant="label">Last Name</Text>
            <Input placeholder="Doe" name="last_name" type="text" value={values.last_name} onChange={handleChange}/>
            <div>
              <Button onClick={this.continue}>Continue</Button>
            </div>
          </form>
        </Card>
      </div>
    )
  }


}

export default Form1;