import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import BasicLayout from './comopnents/layout/BasicLayout/basicLayout';

function App() {
  return (
    <BrowserRouter>
      <BasicLayout />
    </BrowserRouter>
  );
}

export default App;
