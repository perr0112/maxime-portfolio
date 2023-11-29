import './stylesheet/reset.scss';

import BasePage from './BasePage';
import About from './components/About/About';
import ErrorRoute from './ErrorRoute';
import Portfolio from './components/Portfolio/Portfolio';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
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
          <Route path="*"
          element={<BasePage>
              <ErrorRoute />
            </BasePage>}
          />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
