import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navBar.css'

export const NavBar = () => {
  return (
    <>
      <div className='nav justify-content-center sticky-top bg-dark text-decoration-none text-white'>
            <div className='d-flex align-items-center' > <i className="bi bi-cash-coin fs-2 px-3"></i> <Link className='logo text-uppercase fs-2' to="/"> Stock Market </Link></div>
      </div>
   </>
  );
};
