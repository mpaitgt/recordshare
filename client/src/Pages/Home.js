import React, { useState, useContext } from 'react';
import MusicCard from '../Components/ContentCard/MusicCard';
import { Row, Col } from 'react-grid-system';
import ResultsContainer from '../Components/ResultsContainer';
import Container from '../Components/Elements/Container';
import { PayloadContext } from '../Components/Providers/PayloadProvider';
import Text from '../Components/Elements/Text';
import Button from '../Components/Elements/Button';
import FilterBar from '../Components/Search/FilterBar';

function Home() {
  const [
    payload, 
    setPayload, 
    results, 
    setResults,
    search,
    setSearch
  ] = useContext(PayloadContext);

  return (
    <div>
      <FilterBar />
    
      <Container>
          {
            results
            ?
            <div>
              <Text variant="h2">Results for <em>{search}</em></Text>
              <ResultsContainer>
                {
                  results
                  ?
                  payload.map(item => {
                    return (
                      <MusicCard content={item} key={Math.random()}/>
                    )
                  })
                  // console.log(payload)
                  :
                  null
                }
              </ResultsContainer>
            </div>
            :
            null
          }
      </Container>
    </div>
  )
}

export default Home;