import { useEffect, useState } from "react"
import * as productService from '../../services/product'

export const Home = () => {

    const [products, setProducts] = useState<Array<any>>([])

    useEffect(() => {
        const getProducts = async () => {
            console.log(await productService.getAll())
        }
        getProducts()
    }, [])

    return (
        <div>
            {products.map((product, index) => (
                <div>
                    <div>{product.items.images}</div>
                    <div>{product.name}</div>
                    <div>{product.categories}</div>
                    <div>{product.description}</div>
                </div>
            ))}
        </div>
    )
}