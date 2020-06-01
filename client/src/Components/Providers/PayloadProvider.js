import React, { useState, createContext } from 'react';

export const PayloadContext = createContext();

export const PayloadProvider = props => {
  const [artistAlbum, setArtistAlbum] = useState({
    artist: '',
    title: ''
  });

  return (
    <PayloadContext.Provider value={[ 
      artistAlbum, 
      setArtistAlbum
    ]}>
      {props.children}
    </PayloadContext.Provider>
  )
}