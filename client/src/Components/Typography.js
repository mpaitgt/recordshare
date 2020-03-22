import React from 'react';
import styled from '@emotion/styled';

let font = {
  standard: {
    fontFamily: 'var(--subfont)',
    letterSpacing: '-1px'
  },
  h1: {
    fontSize: '52px'
  },
  h2: {
    fontSize: '44px'
  },
  h3: {
    fontSize: '36px'
  },
  h4: {
    fontSize: '28px'
  },
  h5: {
    fontSize: '20px'
  },
  h6: {
    fontSize: '12px'
  },
  p1: {
    fontSize: '14px'
  },
  label: {
    fontSize: '14px'
  }
}

function Typography({ variant, children, htmlFor }) {
  switch(variant) {
    case 'h1':
      return <h1 style={Object.assign(font.standard, font.h1)}>{children}</h1>;
      break;
    case 'h2':
      return <h2 style={Object.assign(font.standard, font.h2)}>{children}</h2>;
      break;
    case 'h3':
      return <h3 style={Object.assign(font.standard, font.h3)}>{children}</h3>;
      break;
    case 'h4':
      return <h4 style={Object.assign(font.standard, font.h4)}>{children}</h4>;
      break;
    case 'h5':
      return <h5 style={Object.assign(font.standard, font.h5)}>{children}</h5>;
      break;
    case 'h6':
      return <h6 style={Object.assign(font.standard, font.h6)}>{children}</h6>;
      break;
    case 'label':
      return <label style={Object.assign(font.standard, font.label)} htmlFor={htmlFor}>{children}</label>
    default:
      return <p style={Object.assign(font.standard, font.p1)}>{children}</p>;
      break;
  }
}

export default Typography;