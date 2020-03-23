import React, {useEffect} from 'react';
import styled from '@emotion/styled';

const TRANSITION = styled.div`
  width: auto;
  margin: 0 auto;
  text-align; center;
`;

function Transition({children}) {

  useEffect(() => {
    let transition = document.querySelectorAll('.transition');
    transition.forEach(page => {
      page.classList.add('in');
      setTimeout(() => page.classList.remove('in'), 1500);
    })
  }, [])

  return (
    <TRANSITION className="transition">{children}</TRANSITION>
  )
}

export default Transition;