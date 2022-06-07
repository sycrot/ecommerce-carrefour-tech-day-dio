import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { ProductCard } from "../../components/productCard"
import * as productService from '../../services/product'
import * as C from './styles'
import * as I from '../../common/icons'
import { Filter } from "../../components/filter"


export const Products = () => {
    const {value, type} = useParams()
    const [products, setProducts] = useState<Array<any>>([])

    useEffect(() => {
        const getProducts = async () => {
            let res:any[] = []
            if (type === "search") {
                res = await productService.search(value).then(e => e)
            }

            if (type === "clusters") {
                res = await productService.getProductClusters(+value).then(e => e)
            }

            if (type === "categories") {
                res = await productService.getCaterogy(value).then(e => e)
            }
            setProducts(res)
        }
        getProducts()
    }, [value, type])

    const handleError = () => {
        return (
            <C.Error>
                <C.Icon>{I.Exclamation}</C.Icon>
                <C.Text>Sinto muito! Nenhum resultado para sua pesquisa.</C.Text>
                <C.Link><Link to="/">Voltar para página inicial</Link></C.Link>
            </C.Error>
        )
    }

    return (
        <C.Container>
            <C.Filter>
                <Filter />
            </C.Filter>
            <C.Content>
                {
                    products.length == 0 ?
                    handleError() 
                    :
                    products.map(product => (
                        <ProductCard key={product.id} id={product.id} name={product.name} image={product.image} sellers={product.sellers}/>
                    ))
                }
            </C.Content>
        </C.Container>
    )
}