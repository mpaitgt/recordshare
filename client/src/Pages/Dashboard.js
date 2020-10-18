import React, {useContext} from 'react';
import {Text, Container, Card} from '../Components/Elements';
import PageBlock from '../Components/UI_Elements/PageBlock';
import dashImg from '../Images/home-image-2.jpg';
import {UserContext} from '../Components/Providers/UserProvider';
import API from '../Utils';

const Dashboard = () => {
  const [user, setUser] = useContext(UserContext);

  return (
      <PageBlock image={dashImg} size="auto">
      <Container>
      {
        user
        ?
        <div>
          <Text variant="h1">Dashboard - Welcome {user.username}!</Text>
          <Text variant="h3">Email: {user.email}</Text>
          <Text variant="h3">Date Joined: {API.helpers.convertDate(user.date_joined)}</Text>
          <div>
            {/* {user.albums.map(album => {
              return <img src={} />;
            })} */}
          </div>
        </div>
        :
        <Text variant="h1">User Dashboard - user not logged in</Text>
      }
      </Container>
      </PageBlock>
  )
}

export default Dashboard;