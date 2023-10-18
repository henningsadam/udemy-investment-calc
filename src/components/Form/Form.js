import React, { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './Form.module.css'

const defaultInputValues = {
    'current-savings': 0,
    'yearly-contribution': 0,
    'expected-return': 0,
    duration: 0,
}

const Form = (props) => {
  const [userInput, setUserInput] = useState(defaultInputValues);

  const inputChangeHandler = (input, value) => {
    console.log(input, value);
    setUserInput((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  const resetFormHandler = () => {
    setUserInput(defaultInputValues);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    props.onSubmit(userInput);
  };

  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      <div className={styles['input-group']}>
        <Input
          label='Current Savings ($)'
          id='current-savings'
          type='number'
          onChange={inputChangeHandler}
          value={userInput['current-savings']}
        />
        <Input
          label='Yearly Savings ($)'
          id='yearly-contribution'
          type='number'
          onChange={inputChangeHandler}
          value={userInput['yearly-contribution']}
        />
      </div>
      <div className={styles['input-group']}>
        <Input
          label='Expected Interest (%, per year)'
          id='expected-return'
          type='number'
          onChange={inputChangeHandler}
          value={userInput['expected-return']}
        />
        <Input
          label='Investment Duration (years)'
          id='duration'
          type='number'
          onChange={inputChangeHandler}
          value={userInput['duration']}
        />
      </div>
      <p className={styles.actions}>
        <Button type='reset' onClick={resetFormHandler}>
          Reset
        </Button>
        <Button type='submit'>
          Calculate
        </Button>
      </p>
    </form>
  );
};

export default Form;
