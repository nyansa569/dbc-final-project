import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';

const Avatar = ({ src, alt, size = 'medium', fallback, className = '' }) => {
  const sizeClasses = {
    small: 'avatar-small',
    medium: 'avatar-medium',
    large: 'avatar-large',
    xlarge: 'avatar-xlarge'
  };

  const avatarClass = `avatar ${sizeClasses[size]} ${className}`.trim();

  if (src) {
    return (
      <div className={avatarClass}>
        <img src={src} alt={alt} onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }} />
        {fallback && (
          <div className="avatar-fallback" style={{ display: 'none' }}>
            {typeof fallback === 'string' ? fallback.charAt(0) : fallback}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={avatarClass}>
      <div className="avatar-fallback">
        {typeof fallback === 'string' ? fallback.charAt(0) : fallback}
      </div>
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
  fallback: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  className: PropTypes.string
};

export default Avatar;