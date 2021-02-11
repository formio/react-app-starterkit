import React from 'react';

const Loading = (props) => {
  const {
    style = {
      width: '60px',
      height: '60px',
      marginLeft: 'calc(50% - 60px)',
      marginTop: '40px'
    },
    textClass
  } = props;

  return (
    <div className={`spinner-border ${textClass || 'text-primary'}`} style={style} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loading;
