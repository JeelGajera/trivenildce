import React from 'react';

const ColorAnimation: React.FC = () => {
  return (
    <div className="text-4xl font-bold text-center">
      <span className="inline-block">
        <span
          className="inline animate-color-red"
          style={{     color: '#6495ed', animationDuration: '3s' }} // Adjust animation duration as needed
        >
          Are
        </span>{' '}
        <span
          className="inline animate-color-green"
          style={{     color: '#00ffff', animationDuration: '3s' }} // Adjust animation duration as needed
        >
          you
        </span>{' '}
        <span
          className="inline animate-color-blue"
          style={{ color: '#deb887', animationDuration: '3s' }} // Adjust animation duration as needed
        >
          ready?
        </span>
      </span>
    </div>
  );
};

export default ColorAnimation;
