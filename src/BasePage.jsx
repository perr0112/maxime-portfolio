import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function BasePage({ children }) {
  return (
    <div className="basepage">
        <Header />
            {children}
        <Footer />
    </div>
  )
}
