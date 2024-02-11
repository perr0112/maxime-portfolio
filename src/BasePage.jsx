import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import transition from './components/data/transition';

function BasePage({ children, selected }) {
  return (
    <div className="basepage">
        <Header selected={selected} />
            {children}
        <Footer />
    </div>
  );
}

export default transition(BasePage);
