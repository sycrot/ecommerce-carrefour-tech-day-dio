import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/header'
import { Home } from './pages/home'
import { Product } from './pages/product'
import { Search } from './pages/search'

export const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="categories" element={<Search />} />
                <Route path="/product/:id" element={<Product />} />
            </Routes>
        </BrowserRouter>
    )
}