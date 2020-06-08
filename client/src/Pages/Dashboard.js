import React, {useEffect, useContext} from 'react';
import Text from '../Components/Elements/Text';
import Container from '../Components/Elements/Container';
import {UserContext} from '../Components/Providers/UserProvider';

function Dashboard() {
  const [user, setUser] = useContext(UserContext);

  const fullDate = (date) => {
    let 
      month = new Date(date).getMonth(),
      day = new Date(date).getDate(),
      year = new Date(date).getFullYear();
    return `${month + 1}/${day}/${year}`
  }

  return (
    <Container>
      {
        user
        ?
        <div>
        <Text variant="h1">Dashboard - Welcome {user.first_name}!</Text>
        <Text variant="h2">Email: {user.email}</Text>
        <Text variant="h2">Date Joined: {fullDate(user.date_joined)}</Text>
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