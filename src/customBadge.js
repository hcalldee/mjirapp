import React from 'react';

// Custom Badge component
const CustomBadge = ({ style, children }) => (
  <span style={{ ...defaultStyle, ...style }} className="badge">
    {children}
  </span>
);

const defaultStyle = {
  display: 'inline-block',
  padding: '0.2em 0.6em',
  fontSize: '75%',
  fontWeight: '700',
  lineHeight: '1',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  verticalAlign: 'baseline',
  borderRadius: '0.25rem',
};

export default CustomBadge;
