import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../Home/Home'
import Layout from '../Layout/Layout'
import Category from '../Category/Category'
import Products from '../Products/Products'
import AboutProduct from '../Products/AboutProduct'
import Search from '../Search/Search'


let w = "w"
export const Routing = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                element: <Home/>,
                index: true,
            },
            {
                path: "/products/category",
                element:<Category/>
            },
            {
                path: '/products/category/:id',
                element: <Products/>
            },
            {
                path: '/products/:id',
                element: <AboutProduct/>
            },
            {
                path: '/products/search',
                element: <Search />
            }
        ]
    }
])

