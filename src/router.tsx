import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/header'
import { Cart } from './pages/cart'
import { Home } from './pages/home'
import { Product } from './pages/product'
import { Products } from './pages/products'

export const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products/:type/:value" element={<Products />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/cart" element={<Cart />}/>
            </Routes>
        </BrowserRouter>
    )
}