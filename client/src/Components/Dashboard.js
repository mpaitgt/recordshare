import React from 'react';
import Card from '../Components/Card';
import Text from '../Components/Text';

function Dashboard(props) {
  

  return (
    <Card>
      <Text variant="h2">User Dashboard</Text>
      <Text variant="h4">Film</Text>
      <Text variant="h4">Music</Text>
    </Card>
  )
}

export default Dashboard;