import React from 'react';
import {Link} from 'react-router-dom';
import Card from '../Card';
import Button from '../Elements/Button';
import Text from '../Text';

class Success extends React.Component {
  render() {
    return (
      <div style={{ width: 'auto', margin: '0 auto' }}>
        <Card>
          <Text variant="h1">Success!!</Text>
          <Text variant="p1">Thanks for registering - now enjoy Medo</Text>
          <Link to="/">
            <Button>Get Searchin'</Button>
          </Link>

        </Card>
      </div>
    )
  } 
}

export default Success;