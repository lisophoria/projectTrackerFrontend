import React from 'react';
import 'App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BasicLayoutPage, TasksPage } from 'pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/login'} />
        <Route path={'/'} element={<BasicLayoutPage />}>
          <Route index element={<TasksPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
