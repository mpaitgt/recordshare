import React, { useState, createContext, useMemo } from 'react';

export const UserContext = createContext();

export const UserProvider = props => {
  const [user, setUser] = useState(null);
  // const contextValue = useMemo(() => ({user, setUser}), [user, setUser]);

  return (
    <UserContext.Provider value={[user, setUser]}>
      { props.children }
    </UserContext.Provider>
  )
}