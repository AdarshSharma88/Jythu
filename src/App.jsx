import React from 'react'
import Header from './components/Header.jsx';
import "../src/styles/App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        
      </Routes>
      
    </Router>
  );
}

export default App;