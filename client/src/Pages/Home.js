import React, {useRef} from 'react';
import {Text, Container, Button} from '../Components/Elements';
import Logo from '../Components/Logo';
import PageBlock from '../Components/UI_Elements/PageBlock';
import styled from '@emotion/styled';
import {css} from 'emotion';
import img from '../Images/record-shelf.jpg';
import img2 from '../Images/home-image-2.jpg';
import listen from '../Images/record-listening.jpg';
import flip from '../Images/record-flipping.jpg';
import VisSensor from 'react-visibility-sensor';

const ImageDisplay = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  grip-gap: 20px;
  align-items: center;
  margin-bottom: 50px;
  &:visible {
    background: red;
  }
`;

const Img = styled.img`
  width: 400px;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
`;

const Home = () => {
  const img1ref = useRef(null);
  const img2ref = useRef(null);
  // const [images, setImages] = useState([]);
  // const [index, setIndex] = useState(0);

  const onChange = (isVisible) => {
    console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
    console.log(img1ref.current)
  }

  return (
    <div>
    <PageBlock image={img2} size="auto" />
    <div className={css`
      width: 100%;
      color: blue;
    `}>
      <Container>
        <VisSensor onChange={onChange}>
          <ImageDisplay ref={img1ref}>
              <Img src={listen} />
            <div className={css`padding-left: 50px;`}>
              <Text variant="h2">About</Text>
              <Text variant="p1">
                Recordshare is about shedding light on 
                things you love. As a platform, it allows 
                users to share their stories about what 
                music means to them.
              </Text>
              <Text variant="p1">
                Check out the public feed before signing up, 
                and see what users are getting out of it.
              </Text>
              <Button>Check out the feed</Button>
            </div>
          </ImageDisplay>
        </VisSensor>
          <ImageDisplay ref={img2ref}>
            <div className={css`padding-right: 50px;`}>
              <Text variant="h2">Discover</Text>
              <Text variant="p1">
                Recordshare is about shedding light on 
                things you love. As a platform, it allows 
                users to share their stories about what 
                music means to them.
              </Text>
              <Text variant="p1">
                Check out the public feed before signing up, 
                and see what users are getting out of it.
              </Text>
              <Button display="inline">Check out the feed</Button>
            </div>
              <Img src={flip} />
          </ImageDisplay>
      </Container>
    </div>
    <PageBlock image={img} size="cover" />
    </div>
  )
}

export default Home;