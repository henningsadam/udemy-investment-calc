import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={props.type === 'submit' ? styles.button : styles.buttonAlt }
    >
      {props.children}
    </button>
  );
};

export default Button;
