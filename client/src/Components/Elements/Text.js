import React from 'react';

let font = {
  standard: {
    fontFamily: 'var(--headerfont)',
    color: 'var(--gray-0)',
    letterSpacing: '0px',
    margin: '10px 0px'
  },
  headline: {
    fontSize: '86px'
  },
  h1: {
    fontSize: '62px',
  },
  h2: {
    fontSize: '32px',
  },
  h3: {
    fontSize: '26px',
  },
  h4: {
    fontSize: '20px',
  },
  h5: {
    fontSize: '20px'
  },
  h6: {
    fontSize: '16px'
  },
  p1: {
    fontSize: '16px',
    fontFamily: 'var(--subfont)'
  },
  p2: {
    fontSize: '13px',
    fontFamily: 'var(--subfont)'
  },
  label: {
    fontSize: '16px'
  }
}

function Text({ variant, children, htmlFor }) {
  switch(variant) {
    case 'headline':
      return <h1 style={Object.assign({}, font.standard, font.headline)}>{children}</h1>;
    case 'h1':
      return <h1 style={Object.assign({}, font.standard, font.h1)}>{children}</h1>;
    case 'h2':
      return <h2 style={Object.assign({}, font.standard, font.h2)}>{children}</h2>;
    case 'h3':
      return <h3 style={Object.assign({}, font.standard, font.h3)}>{children}</h3>;
    case 'h4':
      return <h4 style={Object.assign({}, font.standard, font.h4)}>{children}</h4>;
    case 'h5':
      return <h5 style={Object.assign({}, font.standard, font.h5)}>{children}</h5>;
    case 'h6':
      return <h6 style={Object.assign({}, font.standard, font.h6)}>{children}</h6>;
    case 'label':
      return <label style={Object.assign({}, font.standard, font.label)} htmlFor={htmlFor}>{children}</label>
    case 'p1':
      return <p style={Object.assign({}, font.standard, font.p1)}>{children}</p>;
    case 'p2':
      return <p style={Object.assign({}, font.standard, font.p2)}>{children}</p>;
    default: 
      return <p>{children}</p>;
  }
}

export default Text;