import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navBar.css'

export  const Links = () => {
  return (
      <div className='links d-none d-sm-flex p-2' id='my-aside'>
        <Link to="/Stock-Market" className='home'>
           <i className="bi bi-house me-1"></i>
            Home
        </Link>
      </div>
  );
};
