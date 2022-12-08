import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/Add';
import Read from '../components/Read';
import Delete from '../components/Delete';
import Update from '../components/Update';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Routes>
            <Route element={<AddBook/>} path="/add" />
            <Route element={<Read/>} path="/read" />
            <Route element={<Delete/>} path="/delete" />
            <Route element={<Update/>} path="/update" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;