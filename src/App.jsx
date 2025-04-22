// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddMovie from './components/AddMovie'; // Import the new AddMovie component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-movie" element={<AddMovie />} /> {/* Add route for Add Movie */}
      </Routes>
    </Router>
  );
};

export default App;
