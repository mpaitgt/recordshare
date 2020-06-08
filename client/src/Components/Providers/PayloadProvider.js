import React, { useState, createContext } from 'react';

export const PayloadContext = createContext();

export const PayloadProvider = props => {
  const [record, setRecord] = useState(null);

  return (
    <PayloadContext.Provider value={[ record, setRecord ]}>
      {props.children}
    </PayloadContext.Provider>
  )
}