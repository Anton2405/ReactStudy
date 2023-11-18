import React from 'react'
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom'
import About from '../pages/About'
import Post from '../pages/Post'
import Error from '../pages/Error'
import PostIdPage from '../pages/PostIdPage'
export default function AppRouter() {
    return (
        <div>
            <Routes>
                <Route path='/about' element={<About />} />
                <Route exact path='/posts' element={<Post />} />
                <Route exact path='/posts/:id' element={<PostIdPage />} />
                <Route exact path='' element={<Post />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </div>
    )
}
