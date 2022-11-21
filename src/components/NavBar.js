import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className='nav'>
      <div className='nav-sec'>
        <Link className='logo' to="/Stock-Market"> Stock-Market </Link>
        <div className='links'>
          <Link to="/Stock-Market"> Home </Link>
          <Link to="/Details">Details </Link>
        </div>
      </div>
        <i className='bi bi-person-circle'></i>
    </div>
  );
};
