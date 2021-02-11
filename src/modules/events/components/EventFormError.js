import React from 'react';

const EventFormError = ({ error, children }) => {
  if (error === 'Invalid alias') {
    return (
      <div className="alert alert-warning">
        You have not yet created an Event Resource in your project.
        Either create an Event Resource with the path of "event" or import the src/project.json into your project.
      </div>
    );
  }

  return <>{children}</>;
};

export default EventFormError;
