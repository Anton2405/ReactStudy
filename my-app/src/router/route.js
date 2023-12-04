import About from '../pages/About'
import Post from '../pages/Post'
import Error from '../pages/Error'
import PostIdPage from '../pages/PostIdPage'
export const routes = [
    { path: '/about', element: About, exact: true, key: 1 },
    { path: '/posts', element: Post, exact: true, key: 2 },
    { path: '/posts/:id', element: PostIdPage, exact: true, key: 3 },
    { path: '*', element: Post, exact: true, key: 4 }
]
