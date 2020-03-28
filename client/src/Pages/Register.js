import React from 'react';
import Transition from '../Components/Transition';
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
    <Transition>
      <FORMWRAPPER>
        <RegistrationForm />
      </FORMWRAPPER>
    </Transition>
  )
}

export default Register;