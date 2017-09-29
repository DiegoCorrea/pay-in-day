import React from 'react'


export default props => (
  <header className='main-header'>
    <a href='/#/' className='logo'>
      <span className='logo-mini'><b> Pay</b> D</span>
      <span className='logo-lg'>
        <i className='fa fa-money'></i>
        <b> Pay</b> in day
      </span>
    </a>
    <nav className='navbar navbar-static-top'>
      <a href className='sidebar-toggle' data-toggle='offcanvas'></a>
    </nav>
  </header>
)
