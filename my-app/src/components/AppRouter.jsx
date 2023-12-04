import React from 'react'
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom'
import About from '../pages/About'
import Post from '../pages/Post'
import Error from '../pages/Error'
import PostIdPage from '../pages/PostIdPage'
import { publicRoutes, privateRoutes } from '../router/route'
export default function AppRouter() {
    const isAuth = true;
    return (

        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        key={route.key}
                        path={route.path}
                        element={<route.element />}
                        exact={route.exact}
                    />
                )}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
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
//2:38