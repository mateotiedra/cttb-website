import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Stage from './pages/Stage/Stage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' default element={<Home />} />
        <Route path='/stages' element={<Stage />} />
      </Routes>
    </Router>
  );
}

export default App;
