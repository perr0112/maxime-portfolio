import './stylesheet/reset.scss';
import './stylesheet/global_variables.scss';

import BasePage from './BasePage';
import About from './components/About/About';
import ErrorRoute from './ErrorRoute';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';

import { AnimatePresence } from 'framer-motion';

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  return (
    <div className="App">

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index path="/maxime-portfolio" element={
            <BasePage>
              <About />
            </BasePage>
          } />
          <Route path="/portfolio" element={
            <BasePage selected="portfolio">
              <Portfolio />
            </BasePage>
          } />
          <Route path="/services" element={
            <BasePage selected="services">
              <Services />
            </BasePage>
          } />
          <Route path="/contact" element={
            <BasePage selected="contact">
              <Contact />
            </BasePage>
          } />
          <Route path="*" element={
            <BasePage>
              <ErrorRoute />
            </BasePage>
          } />
        </Routes>
      </AnimatePresence>

    </div>
  );
}

export default App;
