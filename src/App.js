import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AllJobs from './pages/AllJobs';
import SearchJobs from './pages/SearchJobs';
import Job from './pages/Job';
import Skill from './pages/Skill';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/jobs" element={<AllJobs />} />
        <Route path="/jobs/search" element={<SearchJobs />} />
        <Route path="/job/:id" element={<Job />} />
        <Route path="/skill/:id" element={<Skill />} />
      </Routes>
    </Router>
  );
}

export default App;
