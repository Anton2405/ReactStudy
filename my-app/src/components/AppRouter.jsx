import React from 'react'
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom'
import About from '../pages/About'
import Post from '../pages/Post'
import Error from '../pages/Error'
export default function AppRouter() {
    return (
        <div>
            <Routes>
                <Route path='/about' element={<About />} />
                <Route path='/post' element={<Post />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </div>
    )
}
