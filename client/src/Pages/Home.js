import React, { useContext } from 'react';
import SearchResult from '../Components/Search/SearchResult';
import ResultsContainer from '../Components/ResultsContainer';
import Container from '../Components/Elements/Container';
import { PayloadContext } from '../Components/Providers/PayloadProvider';
import Text from '../Components/Elements/Text';
import FilterBar from '../Components/Search/FilterBar';
import { css } from 'emotion';

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
      <Container>
        <FilterBar />
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
                      <SearchResult content={item} key={Math.random()}/>
                    )
                  })
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