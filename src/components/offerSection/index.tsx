import { ProductCard } from '../productCard'
import * as C from './styles'

interface OfferProps {
    title: string
    products: any[]
}

export const OfferSection = (props: OfferProps) => {
    return (
        <C.Container>
            <C.Title>{props.title}</C.Title>
            <C.ProductsContent>
                {/* <C.Actions style={{left: 0, borderRadius: '0 1em 1em 0'}}><i>{I.ChevronLeft}</i></C.Actions> */}
                {props.products.map((product, index) => (
                    <ProductCard id={product.id}  key={product.id} image={product.image} name={product.name} sellers={product.sellers}/>
                ))}
                {/* <C.Actions style={{right: '-0.4em', borderRadius: '1em 0 0 1em'}}><i>{I.ChevronRight}</i></C.Actions> */}
            </C.ProductsContent>
        </C.Container>
    )
}