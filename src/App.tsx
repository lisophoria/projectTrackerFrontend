import React from 'react';
import 'App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BasicLayoutPage, TasksPage } from 'pages';
import LoginPage from './pages/Login.page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'/'} element={<BasicLayoutPage />}>
          <Route index element={<TasksPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
