import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';
import Loader from '../Components/Loader/Loader';
const Home = React.lazy(() => import('../Pages/Home'));
const Login = React.lazy(() => import('../Pages/Login'));
const Register = React.lazy(() => import('../Pages/Register'));
const ProductDetail = React.lazy(() => import('../Pages/ProductDetails'));
const Cart = React.lazy(() => import('../Pages/Cart'));
const NotFound = React.lazy(() => import('../Pages/NotFound'));



export default function Router() {
    return (
        <Suspense fallback={<Loader />}>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Product-Details/:id' element={<ProductDetail />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
        </Suspense>
    )
}
