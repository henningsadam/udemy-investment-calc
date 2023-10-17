import React, { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';

const Form = (props) => {
  const [userInput, setUserInput] = useState({
    'current-savings': 0,
    'yearly-contribution': 0,
    'expected-return': 0,
    duration: 0,
  });

  // TODO: Refactor the below code to a single function

  const onChangeCurrentSavingsHandler = (e) => {
    setUserInput((prevState) => ({
      ...prevState,
      'current-savings': e.target.value,
    }));
  };

  const onChangeYearlyContributionHandler = (e) => {
    setUserInput((prevState) => ({
      ...prevState,
      'yearly-contribution': e.target.value,
    }));
  };

  const onChangeExpectedReturnHandler = (e) => {
    setUserInput((prevState) => ({
      ...prevState,
      'expected-return': e.target.value,
    }));
  };

  const onChangeDurationHandler = (e) => {
    setUserInput((prevState) => ({
      ...prevState,
      duration: e.target.value,
    }));
  };

  const resetFormHandler = () => {
    setUserInput({
      'current-savings': 0,
      'yearly-contribution': 0,
      'expected-return': 0,
      duration: 0,
    });
    console.log('form reset!');
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log('form submitted!');
    props.onSubmit(userInput)
  };

  return (
    <form className='form' onSubmit={submitFormHandler}>
      <div className='input-group'>
        <Input
          label='Current Savings ($)'
          id='current-savings'
          type='number'
          onChange={onChangeCurrentSavingsHandler}
          value={userInput['current-savings']}
        />
        <Input
          label='Yearly Savings ($)'
          id='yearly-contribution'
          type='number'
          onChange={onChangeYearlyContributionHandler}
          value={userInput['yearly-contribution']}
        />
      </div>
      <div className='input-group'>
        <Input
          label='Expected Interest (%, per year)'
          id='expected-return'
          type='number'
          onChange={onChangeExpectedReturnHandler}
          value={userInput['expected-return']}
        />
        <Input
          label='Investment Duration (years)'
          id='duration'
          type='number'
          onChange={onChangeDurationHandler}
          value={userInput['duration']}
        />
      </div>
      <p className='actions'>
        <Button type='reset' className='buttonAlt' onClick={resetFormHandler}>
          Reset
        </Button>
        <Button type='submit' className='button'>
          Calculate
        </Button>
      </p>
    </form>
  );
};

export default Form;
