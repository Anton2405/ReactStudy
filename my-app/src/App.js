import React, { useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom'
import Navbar from './components/UI/Navbar/Navbar'
import './styles/App.css'
import AppRouter from './components/AppRouter'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}
//2:33
export default App;
