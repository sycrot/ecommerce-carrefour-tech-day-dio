import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/header'
import { Category } from './pages/category'
import { Home } from './pages/home'
import { Product } from './pages/product'
import { Search } from './pages/search'

export const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search/:value" element={<Search />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/categories/:category" element={<Category />} />
            </Routes>
        </BrowserRouter>
    )
}