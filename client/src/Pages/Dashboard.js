import React, {useContext} from 'react';
import {Text, Container} from '../Components/Elements';
import {UserContext} from '../Components/Providers/UserProvider';
import helpers from '../Utils/helpers';

const Dashboard = () => {
  const [user, setUser] = useContext(UserContext);

  return (
    <Container>
      {
        user
        ?
        <div>
          <Text variant="h1">Dashboard - Welcome {user.first_name}!</Text>
          <Text variant="h2">Email: {user.email}</Text>
          <Text variant="h2">Date Joined: {helpers.convertDate(user.date_joined)}</Text>
        </div>
        :
        <Text variant="h1">User Dashboard - user not logged in</Text>
      }
    </Container>
  )
}

export default Dashboard;