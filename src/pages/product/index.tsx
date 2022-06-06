import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as productService from '../../services/product'
import * as C from './styles'
import * as I from '../../common/icons'


export const Product = () => {
    const { id } = useParams()
    const [product, setProduct] = useState<Array<any>>([])

    useEffect(() => {
        const getProduct = async () => {
            const res = await productService.getById(id)

            setProduct(res)
        }
        getProduct()
    }, [])

    const handlePrice = (price: number) => {
        let newPrice = price.toFixed(2).toString()
        let result = newPrice.replace('.', ',')

        return `${result}`
    }

    return (
        <C.Container>
            {product.map(prod => (
                <C.Product key={prod.productId}>
                    <C.Image><img src={prod.items[0].images[0].imageUrl} alt={prod.productName}/></C.Image>

                    <C.Content>
                        <C.Name>{prod.productName}</C.Name>
                        
                        <C.Price>
                            <small>R$ {handlePrice(prod.items[0].sellers[0].commertialOffer.Price + 2)}</small><br/>
                            <span>R$ </span>{handlePrice(prod.items[0].sellers[0].commertialOffer.Price)}
                        </C.Price>

                        <C.Freight><i>{I.Location}</i><input type="number" placeholder="Calcular frete e prazo"/></C.Freight>

                        <C.Button bg="#02458c"><i>{I.CreditCard}</i>Comprar agora</C.Button>
                        <C.Button color="#02458c"><i>{I.Cart}</i>Adicionar ao carrinho</C.Button>
                    </C.Content>

                    <C.ContentBottom>
                        <C.Description>
                            <h3>Informações do produto</h3>
                            <p>{prod.description}</p>
                        </C.Description>
                    </C.ContentBottom>
                    
                    {/* <C.Quantity>{prod.items[0].sellers[0].commertialOffer.AvailableQuantity}</C.Quantity>
                    
                    
                    {prod.items[0].sellers[0].commertialOffer.PriceWithoutDiscount} */}
                </C.Product>
            ))}
        </C.Container>
    )
}