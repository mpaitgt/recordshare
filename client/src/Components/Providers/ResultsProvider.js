import React, { useState, createContext } from 'react';

export const ResultsContext = createContext();

export const ResultsProvider = props => {
  const [results, setResults] = useState([]);

  return (
    <ResultsContext.Provider value={[ results, setResults ]}>
      {props.children}
    </ResultsContext.Provider>
  )
}