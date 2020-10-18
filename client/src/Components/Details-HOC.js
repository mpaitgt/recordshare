import React from 'react';

const higherOrderComponent = (WrappedComponent) => (props) => {
  return (
    <WrappedComponent onClick={() => console.log('hello world!')} {...props} />
  );
}

export default higherOrderComponent;