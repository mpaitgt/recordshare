import React, { useState, useContext } from 'react';
import MusicCard from '../Components/ContentCard/MusicCard';
import { Row, Col } from 'react-grid-system';
import ResultsContainer from '../Components/ResultsContainer';
import Container from '../Components/Elements/Container';
import { PayloadContext } from '../Components/Providers/PayloadProvider';

function Home() {
  const [payload, setPayload, results, setResults] = useContext(PayloadContext);

  return (
      <Container>
        <ResultsContainer>
          {
            results
            ?
            payload.map(item => {
              return (
                <MusicCard content={item} key={Math.random()}/>
              )
            })
            :
            null
          }
        </ResultsContainer>
      </Container>
  )
}

export default Home;