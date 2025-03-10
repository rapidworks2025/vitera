import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Impressum from './pages/Impressum';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
    </Router>
  );
}

export default AppRouter; 