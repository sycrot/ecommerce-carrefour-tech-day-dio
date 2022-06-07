import { useEffect, useState } from "react"
import { ProductCard } from "../../components/productCard"
import { SlideShow } from "../../components/slideshow"
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
            <SlideShow />
            <C.ListItems>
                <C.Promotion bg="https://1.bp.blogspot.com/-aW4bnUzzTeU/YIQWX-VNJ2I/AAAAAAAAFGA/kF_mWjkjgV0bJzGmqwNvxOhWrGruuojWACLcBGAsYHQ/w1600/DB0772F1-A5DD-40A1-8FC7-D02C8DB84D55.jpeg" color="#fff">
                    <C.PromotionTexts bg='0, 158, 255'>
                        <p>Super<br/>Ofertas</p>
                        <small>com até</small>
                        <span>60% OFF</span>
                    </C.PromotionTexts>
                </C.Promotion>

                <C.Promotion bg="https://4.bp.blogspot.com/-SrZKb7xVZSg/U9pF4qSBsvI/AAAAAAAAJHQ/3_dxVvmkhlQ/s1600/Imagem+de+divulgacao+-+Julho+2014.jpg" color="#fff">
                    <C.PromotionTexts bg='255, 124, 0'>
                        <span>Ofertas</span>
                        <small>da</small>
                        <span>Semana</span>
                    </C.PromotionTexts>
                </C.Promotion>

                <C.Promotion bg="https://newtrade.com.br/wp-content/uploads/2018/02/carrefour-carrinho.jpg" color="#fff">
                    <C.PromotionTexts bg='255, 0, 0'>
                        <p style={{marginBottom: '0.4em'}}>HOT BAR</p>
                        <span>MERCEARIA</span>
                    </C.PromotionTexts>
                </C.Promotion>
            </C.ListItems>
            <C.Products>
                {products.map((product, index) => (
                    <ProductCard id={product.id}  key={product.id} image={product.image} name={product.name} sellers={product.sellers}/>
                ))}
            </C.Products>
            
        </C.Container>
    )
}