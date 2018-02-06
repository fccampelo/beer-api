import '../common/templates/dependencias';
import React from 'react';

import Footer from '../common/footer/footer';
import Header from '../common/header/header';
import Sidebar from '../common/menu/sideBar';
import Message from '../common/message/message';


export default props => (
  <div className='wrapper' >
    <Header />
    <Sidebar />
    <div className='content-wrapper'>
      { props.children }
    </div>
    <Footer />
    <Message />
  </div>
);
