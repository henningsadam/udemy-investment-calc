import React from 'react';

const Input = (props) => {
  return (
    <p>
      <label htmlFor={props.id}>{props.label}</label>
      <input type={props.type} id={props.id} onChange={props.onChange} value={props.value} />
    </p>
  );
};

export default Input;