import React from 'react';
import './App.css';
import BasicLayout from "./comopnents/layout/BasicLayout/basicLayout";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <BasicLayout />
    </BrowserRouter>
  );
}

export default App;
