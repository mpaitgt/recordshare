import React from 'react';
import Login from './Login';
import RegistrationForm from '../Components/Signup/RegistrationForm';
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
      <FORMWRAPPER>
        <RegistrationForm />
      </FORMWRAPPER>
    </Container>
  )
}

export default Register;