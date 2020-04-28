import React, { useState, createContext } from 'react';

export const PayloadContext = createContext();

export const PayloadProvider = props => {
  const [payload, setPayload] = useState([]);
  const [search, setSearch] = useState('');
  const [results, setResults] = useState(null);

  return (
    <PayloadContext.Provider value={[ 
      payload, 
      setPayload, 
      results, 
      setResults,
      search,
      setSearch
    ]}>
      {props.children}
    </PayloadContext.Provider>
  )
}