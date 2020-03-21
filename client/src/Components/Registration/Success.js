import React from 'react';
import Card from '../Card';

class Success extends React.Component {
  render() {
    return (
      <div style={{ width: 'auto', margin: '0 auto' }}>
        <Card>
          <div>Success!!</div>
          <div>Thank you for your submission.</div>
        </Card>
      </div>
    )
  } 
}

export default Success;