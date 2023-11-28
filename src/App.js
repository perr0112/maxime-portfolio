import './stylesheet/reset.scss';

import BasePage from './BasePage';

import { Routes, BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"
            element={<BasePage></BasePage>}
          />
          <Route path="/portfolio"
            element={<BasePage></BasePage>}
          />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
