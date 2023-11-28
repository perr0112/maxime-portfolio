import './stylesheet/reset.scss';

import BasePage from './BasePage';
import About from './components/About/About';
import ErrorRoute from './ErrorRoute';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"
            element={<BasePage>
              <About />
            </BasePage>}
          />
          <Route path="/portfolio"
            element={<BasePage></BasePage>}
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
