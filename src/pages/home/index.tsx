import { useEffect, useState } from "react"
import { ProductCard } from "../../components/productCard"
import * as productService from '../../services/product'
import * as C from './styles'

export const Home = () => {

    const [products, setProducts] = useState<Array<any>>([])

    useEffect(() => {
        const getProducts = async () => {
            const res = await productService.getAll()
            setProducts(res)
        }
        getProducts()
    }, [])

    return (
        <C.Container>
            {products.map((product, index) => (
                <ProductCard id={product.id}  key={product.id} image={product.image} name={product.name} sellers={product.sellers}/>
            ))}
        </C.Container>
    )
}