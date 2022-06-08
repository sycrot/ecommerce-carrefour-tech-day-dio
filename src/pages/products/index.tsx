import {  useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { ProductCard } from "../../components/productCard"
import * as productService from '../../services/product'
import * as C from './styles'
import * as I from '../../common/icons'
import { Product } from "../../types/Product"


export const Products = () => {
    const {value, type} = useParams()
    const [products, setProducts] = useState<Product[]>([])
    const [order, setOrder] = useState('')

    useEffect(() => {
        const getProducts = async () => {
            let res:any[] = []
            if (type === "search") {
                res = await productService.search(value)
            }

            if (type === "clusters") {
                res = await productService.getProductClusters(+value).then(e => e)
            }

            if (type === "categories") {
                res = await productService.getCaterogy(value)
            }

            const getOrder = (order: string, productsList:Product[]) => {
                if (order === 'relevance') {
                    return productsList 
                }
                if (order === 'lowestprice') {
                    productsList = products.sort((a, b) => a.sellers - b.sellers)
                }
                if (order === 'biggestprice') {
                    productsList = products.sort((a, b) => b.sellers - a.sellers)
                }
        
                return productsList
            }

            setProducts(getOrder(order, res))
        }
        getProducts()
    }, [value, type, order, products])

    

    const handleError = () => {
        return (
            <C.Error>
                <C.Icon>{I.Exclamation}</C.Icon>
                <C.Text>Sinto muito! Nenhum resultado para sua pesquisa.</C.Text>
                <C.Link><Link to="/">Voltar para página inicial</Link></C.Link>
            </C.Error>
        )
    }

    const handleOrder = (event: any) => {
        let orderValue = event.options[event.selectedIndex].value
        
        setOrder(orderValue)
    }

    return (
        <C.Container>
            <C.Filter>
                <C.List>
                    <span>Faixa de Preço</span>
                    <C.InputRange type="range" max="20000" min="0"/>
                    <C.MinMax><small>R$ 0</small><small>R$ 20.000,00</small></C.MinMax>
                </C.List>

                <C.List>
                    <span>Marca</span>
                    <ul>
                        <li>
                            <input type="checkbox" id="marca"/>
                            <label htmlFor="marca">Marca</label>
                        </li>
                        <li>
                            <input type="checkbox" id="marca2"/>
                            <label htmlFor="marca2">Marca</label>
                        </li>
                        <li>
                            <input type="checkbox" id="marca3"/>
                            <label htmlFor="marca3">Marca</label>
                        </li>
                        <li>
                            <input type="checkbox" id="marca4"/>
                            <label htmlFor="marca4">Marca</label>
                        </li>
                    </ul>
                </C.List>
            </C.Filter>
            <C.Content>
                <C.ContentHeader>
                    <span><p>{products.length}</p> produtos encontrados</span>
                    <C.Order>
                        <span>Ordenar por</span>
                        <select name="order" id="order" onChange={e => handleOrder(e.target)}>
                            <option value="relevance">Relevância</option>
                            <option value="lowestprice">Menor preço</option>
                            <option value="biggestprice">Maior preço</option>
                            <option>Mais vendidos</option>
                            <option>Menos vendidos</option>
                        </select>
                    </C.Order>
                </C.ContentHeader>
                <C.ContentProducts>
                    {
                        products.length == 0 ?
                        handleError() 
                        :
                        products.map(product => (
                            <ProductCard key={product.id} id={product.id} name={product.name} image={product.image} sellers={product.sellers}/>
                        ))
                    }
                </C.ContentProducts>
            </C.Content>
        </C.Container>
    )
}