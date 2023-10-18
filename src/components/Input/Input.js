import React from 'react';

const Input = (props) => {
  return (
    <p>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        onChange={(event) => {
          props.onChange(props.id, event.target.value);
        }}
        value={props.value}
      />
    </p>
  );
};

export default Input;
