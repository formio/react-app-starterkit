import React from 'react';

const Confirm = (props) => {
  const {
    onYes,
    onNo,
    message,
    yesText = 'Yes',
    noText = 'No'
  } = props;

  return (
    <div>
      <h3>{message}</h3>
      <div className="btn-toolbar">
        <span onClick={onYes} className="btn btn-danger">{yesText}</span>
        <span onClick={onNo} className="btn btn-default">{noText}</span>
      </div>
    </div>
  );
};

export default Confirm;
