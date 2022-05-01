import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Stage from './pages/Stage/Stage';
import ClubRegistration from './pages/ClubRegistration/ClubRegistration';
import ClubRegistrationForm from './pages/ClubRegistrationForm/ClubRegistrationForm';
import MemberSpace from './pages/MemberSpace/MemberSpace';
import Auth from './pages/Auth/Auth';
import MemberManager from './pages/MemberManager/MemberManager';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' default element={<Home />} />
        <Route path='/stages' element={<Stage />} />
        <Route path='/adhesion' element={<ClubRegistration />} />
        <Route path='/adhesion/formulaire' element={<ClubRegistrationForm />} />
        <Route path='/membre' element={<MemberSpace />} />
        <Route
          path='/membre/connexion'
          element={<Auth startingMode='login' />}
        />
        <Route
          path='/membre/inscription'
          element={<Auth startingMode='register' />}
        />
        <Route path='/admin/membres' element={<MemberManager />} />
      </Routes>
    </Router>
  );
}

export default App;
