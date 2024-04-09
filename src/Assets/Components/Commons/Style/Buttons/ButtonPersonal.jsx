// Button.jsx
import React from 'react';
import './Button.css';

const ButtonPersonal = ({ children, onClick, className = '', type = 'button', text }) => {
  return (
    <button className={`Info-Button`} onClick={onClick} type={type}>
      <span>{text}</span> {/* Utilizzo della prop text qui */}
    </button>
  );
};

export default ButtonPersonal;
