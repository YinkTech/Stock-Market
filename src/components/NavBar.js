import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className='nav'>
        <Link className='logo' to="/Stock-Market"> Stock-Market </Link>
          <div className='links'>
            <Link to="/Stock-Market"> Home </Link>
          </div>
    </div>
  );
};
