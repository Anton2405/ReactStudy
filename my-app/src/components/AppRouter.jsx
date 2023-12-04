import React from 'react'
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom'
import About from '../pages/About'
import Post from '../pages/Post'
import Error from '../pages/Error'
import PostIdPage from '../pages/PostIdPage'
import { routes } from '../router/route'
export default function AppRouter() {
    return (
        <Routes>
            {routes.map(route =>
                <Route
                    key={route.key}
                    path={route.path}
                    element={<route.element />}
                    exact={route.exact}
                />
            )}
        </Routes>

    )
}
//2:33