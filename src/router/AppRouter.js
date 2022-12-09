import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Add from '../components/crud/Add';
import Read from '../components/crud/Read';
import Delete from '../components/crud/Delete';
import Update from '../components/crud/Update';
import CreateToken from '../components/token/CreateToken';
import TransferToken from '../components/token/TransferToken';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Routes>
            <Route element={<Add/>} path="/add" />
            <Route element={<Read/>} path="/read" />
            <Route element={<Delete/>} path="/delete" />
            <Route element={<Update/>} path="/update" />
            <Route element={<CreateToken/>} path="/create-token" />
            <Route element={<TransferToken/>} path="/transfer" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;