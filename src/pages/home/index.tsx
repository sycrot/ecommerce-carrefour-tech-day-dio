import { useEffect, useState } from "react"
import { SlideShow } from "../../components/slideshow"
import * as productService from '../../services/product'
import * as C from './styles'
import { OfferSection } from "../../components/offerSection"
import { OffersCategories } from "../../components/offersCategories"
import { Link } from "react-router-dom"

export const Home = () => {

    const [productsOffer, setProductsOffer] = useState<Array<any>>([])

    useEffect(() => {
        const getProductsOffer = async () => {
            const res = await productService.getProductClusters(5622)
            /* const res = await productService.getAll() */

            setProductsOffer(res)
        }
        getProductsOffer()
    }, [])



    return (
        <C.Container>
            <SlideShow />
            <C.ListItems>
                <Link to={`/products/clusters/${2879}`}>
                    <C.Promotion bg="https://1.bp.blogspot.com/-aW4bnUzzTeU/YIQWX-VNJ2I/AAAAAAAAFGA/kF_mWjkjgV0bJzGmqwNvxOhWrGruuojWACLcBGAsYHQ/w1600/DB0772F1-A5DD-40A1-8FC7-D02C8DB84D55.jpeg" color="#fff">
                        <C.PromotionTexts bg='0, 158, 255'>
                            <p>Super<br/>Ofertas</p>
                            <small>com até</small>
                            <span>60% OFF</span>
                        </C.PromotionTexts>
                    </C.Promotion>
                </Link>

                <Link to={`/products/clusters/${7959}`}>
                    <C.Promotion bg="https://4.bp.blogspot.com/-SrZKb7xVZSg/U9pF4qSBsvI/AAAAAAAAJHQ/3_dxVvmkhlQ/s1600/Imagem+de+divulgacao+-+Julho+2014.jpg" color="#fff">
                        <C.PromotionTexts bg='255, 124, 0'>
                            <span>Ofertas</span>
                            <small>da</small>
                            <span>Semana</span>
                        </C.PromotionTexts>
                    </C.Promotion>
                </Link>
                
                <Link to={`/products/clusters/${5622}`}>
                    <C.Promotion bg="https://newtrade.com.br/wp-content/uploads/2018/02/carrefour-carrinho.jpg" color="#fff">
                        <C.PromotionTexts bg='255, 0, 0'>
                            <p style={{marginBottom: '0.4em'}}>HOT BAR</p>
                            <span>MERCEARIA</span>
                        </C.PromotionTexts>
                    </C.Promotion>
                </Link>
                
            </C.ListItems>

            <OfferSection title="Ofertas da semana" products={productsOffer}/>

            <C.TitleContent>Os melhores produtos!</C.TitleContent>
            <C.ListItems>
                <OffersCategories link="Destilados" image="https://carrefourbr.vtexassets.com/assets/vtex.file-manager-graphql/images/db53c60a-d929-4a0f-afe2-fcaf168cf1d5___c02858a2da0edca05be4fbb4b5e9bb50.png" name="Destilados"/>

                <OffersCategories link="TVs" image="https://carrefourbr.vtexassets.com/assets/vtex.file-manager-graphql/images/8e82cb9e-83b4-47ba-ad9e-7f710e54bf01___30f4c0efb0fdb946c2452b930c0c4be1.png" name="TVs"/>

                <OffersCategories link="Apple" image="https://carrefourbr.vtexassets.com/assets/vtex.file-manager-graphql/images/bf112a75-980d-4c56-a476-714eb2f4fdbc___3dee58d9ddf18692bdf3321e6908b837.png" name="Apple"/>

                <OffersCategories link="Cozinha" image="https://carrefourbr.vtexassets.com/assets/vtex.file-manager-graphql/images/76044250-a8c8-47bf-be81-2f3a1867a709___7ca7a027d462bece1a0b76f16cb9ba80.png" name="Cozinha"/>

                <OffersCategories link="Maquinas+de+lavar" image="https://carrefourbr.vtexassets.com/assets/vtex.file-manager-graphql/images/aa0a4741-44d7-41a6-8c64-c619e6968e58___561a3e2966edbb5bd5802b8772b54ea3.png" name="Máquinas de lavar"/>

                <OffersCategories link="Informatica" image="https://carrefourbr.vtexassets.com/assets/vtex.file-manager-graphql/images/be056131-bf1f-48b0-8350-88b39f714f38___017c49383bdc5817092551f831b063e9.png" name="Informática"/>

                <OffersCategories link="Eletroportateis" image="https://carrefourbr.vtexassets.com/assets/vtex.file-manager-graphql/images/9b1aa820-bb41-4002-bd46-f2a7c1573c40___db9ae3514064ff4fd82ebc47f9a6d67c.png" name="Eletroportáteis"/>
            </C.ListItems>
        </C.Container>
    )
}