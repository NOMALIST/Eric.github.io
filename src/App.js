import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './common/Header';
import Main from './pages/Main';
import './App.css';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
      </Routes>
    </>
  );
};

export default App;
