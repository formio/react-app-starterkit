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
    <div className="mt-4">
      <h3>{message}</h3>
      <div className="btn-toolbar mt-4">
        <span onClick={onYes} className="btn btn-danger">{yesText}</span>
        <span onClick={onNo} className="btn btn-outline-dark">{noText}</span>
      </div>
    </div>
  );
};

export default Confirm;
