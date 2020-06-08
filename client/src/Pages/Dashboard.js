import React, {useContext} from 'react';
import Text from '../Components/Elements/Text';
import Container from '../Components/Elements/Container';
import {UserContext} from '../Components/Providers/UserProvider';
import helpers from '../Utils/helpers';

function Dashboard() {
  const [user] = useContext(UserContext);

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
        null
      }
      {/* {
        user.albums.length > 0
        ?
        <Text variant="h1">Album display here!</Text>
        :
        <Text variant="h1">You haven't uploaded any albums yet. Upload now.</Text>
      } */}
    </Container>
  )
}

export default Dashboard;