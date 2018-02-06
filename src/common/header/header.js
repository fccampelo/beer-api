import React from 'react';

export default props => (
  <header className='main-header'>
    <a href='/#/' className='logo'>
      <span className='logo-mini'><b>Beer</b></span>
      <span className='logo-g'>
        <i className='fa fa-beer'></i>
        Beer Api
      </span>
    </a>
    <nav className='navbar navbar-static-top'>
      <a href='#' className='sidebar-toggle' data-toggle='offcanvas'></a>
    </nav>  
  </header>
);