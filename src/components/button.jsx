import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, url, className = '', target = '_self', onClick }) => {
  return (
    <a 
      href={url} 
      className={`btn-class ${className}`} // Combina clase base con clases adicionales
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      onClick={onClick}
    >
      {text}
    </a>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  className: PropTypes.string,
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  onClick: PropTypes.func,
};

export default Button;
