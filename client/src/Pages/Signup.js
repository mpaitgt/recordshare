import React from 'react';
import RegistrationForm from '../Components/Signup/RegistrationForm';
import Text from '../Components/Elements/Text';
import Container from '../Components/Elements/Container';
import styled from '@emotion/styled';

const FORMWRAPPER = styled.div`
  width: auto;
  margin: 0 auto;
  text-align: center;
  position: relative;
`;

const Register = () => {
  return (
    <Container>
      <Text variant="h1">Signup</Text>
      <FORMWRAPPER>
        <RegistrationForm />
      </FORMWRAPPER>
    </Container>
  )
}

export default Register;