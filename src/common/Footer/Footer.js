import React from 'react';

const Footer = () => {
  const styles = {
    padding: '15px',
  };

  return (
    <footer className="footer">
      <div className="container text-center mt-auto" style={styles}>
        Built with ♥ by&nbsp;
        <a href="https://form.io">Form.io</a>
      </div>
    </footer>
  );
};

export default Footer;
