import React, { useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Post from './pages/Post'

function App() {




  return (
    <BrowserRouter>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/post' element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}
//1:46
export default App;
