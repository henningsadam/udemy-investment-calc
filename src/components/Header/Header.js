import React from 'react';

const Header = (props) => {
  return (
    <header className='header'>
      <img src={props.logoUrl} alt='logo' />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;
