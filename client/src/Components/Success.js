import React from 'react';
import {Link} from 'react-router-dom';
import {Card, Button, Text} from './Elements';

function NewUserSuccess() {
  return (
    <div style={{ width: 'auto', margin: '0 auto' }}>
      <Card>
        <Text variant="h1">Success!!</Text>
        <Text variant="p1">Thanks for registering.</Text>
        <Link to="/upload">
          <Button display="inline">Get Sharing</Button>
        </Link>
        <Link to="/search">
          <Button display="inline">Search Records</Button>
        </Link>
      </Card>
    </div>
  )
}

function NewSubmissionSuccess() {
  return (
    <div style={{ width: 'auto', margin: '0 auto' }}>
      <Card>
        <Text variant="h1">Your submission was successful!</Text>
        <Link to="/upload">
          <Button>Share another</Button>
        </Link>
      </Card>
    </div>
  )
}

export {NewUserSuccess, NewSubmissionSuccess};