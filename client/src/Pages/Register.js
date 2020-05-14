import React from 'react';
import RegistrationForm from '../Components/Registration/RegistrationForm';
import styled from '@emotion/styled';

const FORMWRAPPER = styled.div`
  width: auto;
  margin: 0 auto;
  text-align: center;
  position: relative;
`;

const Register = () => {
  return (
    <FORMWRAPPER>
      <RegistrationForm />
    </FORMWRAPPER>
  )
}

export default Register;