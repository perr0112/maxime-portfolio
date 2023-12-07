import './stylesheet/reset.scss';

import BasePage from './BasePage';
import About from './components/About/About';
import ErrorRoute from './ErrorRoute';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/"
            element={<BasePage>
              <About />
            </BasePage>}
          />
          <Route path="/portfolio"
            element={<BasePage>
              <Portfolio />
            </BasePage>}
          />
          <Route path="/services"
            element={<BasePage>
              <Services />
            </BasePage>}
          />
          <Route path="/contact"
            element={<BasePage>
              <Contact />
            </BasePage>}
          />
          <Route path="*"
          element={<BasePage>
              <ErrorRoute />
            </BasePage>}
          />
        </Routes>
    </div>
  );
}

export default App;
