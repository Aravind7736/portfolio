// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Welcome from './components/Welcome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} />
{/*         <Route path="/Main" element={<Main/>} /> */}
      </Routes>
    
    </Router>
  );
}

export default App;
