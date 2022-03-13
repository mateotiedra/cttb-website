import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Stage from './pages/Stage/Stage';
import ClubRegistration from './pages/ClubRegistration/ClubRegistration';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' default element={<Home />} />
        <Route path='/stages' element={<Stage />} />
        <Route path='/adhesion' element={<ClubRegistration />} />
      </Routes>
    </Router>
  );
}

export default App;
