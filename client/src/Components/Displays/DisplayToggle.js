import React from 'react';
import {faList} from '@fortawesome/free-solid-svg-icons';
import {faSquare} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from '@emotion/styled';

const DisplayBar = styled.div`
  text-align: right;
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const Icon = styled.span`
  margin: 0px 20px;
  cursor: pointer;
  color: var(--gray-5);
  &:hover {
    color: var(--orange-1);
  }
`;

const DisplayToggle = ({grid, setGrid}) => {
  return (
    <DisplayBar>
      <Icon onClick={() => setGrid(false)}>
        <FontAwesomeIcon grid={grid} size="2x" icon={faList} />
      </Icon>
      <Icon onClick={() => setGrid(true)}>
        <FontAwesomeIcon grid={grid} size="2x" icon={faSquare} />
      </Icon>
    </DisplayBar>
  )
}

export default DisplayToggle;