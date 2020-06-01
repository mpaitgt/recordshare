import React from 'react';
import {keyframes} from '@emotion/core';
import styled from '@emotion/styled';

const spin = keyframes`
  0%{ transform: rotate(0deg) };
  100% { transform: rotate(360deg) };
`;

const RecordLoader = styled.div`
  animation: ${spin} 2s linear infinite;
  position: relative;
  margin: 19px auto;
  width: 450px; 
  height: 450px;
  border-radius: 50%;
  background: 
    linear-gradient(30deg, transparent 40%, rgba(42, 41, 40, .85) 40%) no-repeat 100% 0,
    linear-gradient(60deg, rgba(42, 41, 40, .85) 60%, transparent 60%) no-repeat 0 100%,
    repeating-radial-gradient(#2a2928, #2a2928 4px, #ada9a0 5px, #2a2928 6px);
  background-size: 50% 100%, 100% 50%, 100% 100%;
  &:after {
    position: absolute;
    top: 50%; left: 50%;
    margin: -52px;
    border: solid 1px #d9a388;
    width: 100px; 
    height: 100px;
    border-radius: 50%;
    box-shadow: 0 0 0 4px #da5b33,
      inset 0 0 0 40px #da5b33;
    background: #b5ac9a;
    content: '';
  }
`;

function Loader() {
  return (
    <RecordLoader />
  )
}

export default Loader;