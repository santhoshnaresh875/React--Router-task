// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import FullStack from './components/FullStack';
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity';
import Career from './components/Career';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navigation">
          <NavLink to="/" exact activeClassName="active">All</NavLink>
          <NavLink to="/full-stack" activeClassName="active">Full Stack Development</NavLink>
          <NavLink to="/data-science" activeClassName="active">Data Science</NavLink>
          <NavLink to="/cyber-security" activeClassName="active">Cyber Security</NavLink>
          <NavLink to="/career" activeClassName="active">Career</NavLink>
        </nav>

        <Routes>
          <Route path="/full-stack" element={<FullStack />} />
          <Route path="/data-science" element={<DataScience />} />
          <Route path="/cyber-security" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


