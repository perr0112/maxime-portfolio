import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function BasePage({ children, selected }) {
  return (
    <div className="basepage">
        <Header selected={selected} />
            {children}
        <Footer />
    </div>
  );
}
