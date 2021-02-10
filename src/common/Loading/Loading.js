import React from 'react';

const Loading = ({ style, textClass }) => {
  return (
    <div className={`spinner-border ${textClass || 'text-primary'}`} style={style} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loading;
