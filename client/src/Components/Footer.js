import React from 'react';
import Text from '../Components/Elements/Text';
import styled from '@emotion/styled';

const Foot = styled.div`
  background: var(--gray-6);
  position: relative;
  // position: fixed;
  // bottom: 0;
  // right: 0;
  // left: 0;
  display: flex;
  justify-content: space-around;
`;

function Footer() {
  return (
    <Foot>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <Text variant="p2">Terms of Use</Text>
        <Text variant="p2">Privacy Policy</Text>
        <Text variant="p2">Copyright</Text>
        <Text variant="p2">Help</Text>
      </div>
      <Text variant="p2">Created by Matt Pignatore</Text>
    </Foot>
  )
}

export default Footer;