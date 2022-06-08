import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as productService from '../../services/product'
import * as C from './styles'
import * as I from '../../common/icons'
import { Product as ProductType } from "../../types/Product"
import { CartItem } from "../../types/CartItem"


export const Product = () => {
    const { id } = useParams()
    const [product, setProduct] = useState<ProductType>({id: '', name: '', categories: '', description: '', image: '', productClusters: '', sellers: 0})

    useEffect(() => {
        const getProduct = async () => {
            let res:any
            res = await productService.getById(id) as any

            setProduct(res)
        }
        getProduct()
    }, [id])

    const handlePrice = (price: number) => {
        let newPrice = price.toFixed(2).toString()
        let result = newPrice.replace('.', ',')

        return `${result}`
    }

    const insertIntoCart = (product: ProductType) => {
        let listCart:CartItem[] = []
        const setProductId = new Set()

        if (localStorage.hasOwnProperty('cart_list_carrefour')) {
            listCart = JSON.parse(localStorage.getItem('cart_list_carrefour'))
        }

        listCart.push({product, quantity: 1})

        let newListCart = listCart.filter((prod) => {
            const duplicate = setProductId.has(prod.product.id)
            setProductId.add(prod.product.id)
            return !duplicate
        })

        listCart = newListCart

        localStorage.setItem("cart_list_carrefour", JSON.stringify(listCart))

        window.location.reload()
    }

    const handleStateCart = () => {
        let list = JSON.parse(localStorage.getItem('cart_list_carrefour'))

        for(let i in list) {
            if (list[i].product.id === id) {
                return (
                    <C.InfoCart>Produto adicionado ao carrinho!</C.InfoCart>
                )
            }
        }
    }

    return (
        <C.Container>
            <C.Product key={product.id}>
                <C.Image><img src={product.image} alt={product.name}/></C.Image>

                <C.Content>
                    <C.Name>{product.name}</C.Name>
                    
                    <C.Price>
                        <small>R$ {handlePrice(product.sellers + 2)}</small><br/>
                        <span>R$ </span>{handlePrice(product.sellers)}
                    </C.Price>

                    <C.Freight><i>{I.Location}</i><input type="number" placeholder="Calcular frete e prazo"/></C.Freight>

                    <C.Button bg="#02458c"><i>{I.CreditCard}</i>Comprar agora</C.Button>
                    <C.Button color="#02458c" onClick={() => insertIntoCart(product)}><i>{I.Cart}</i>Adicionar ao carrinho</C.Button>
                    {handleStateCart()}
                </C.Content>

                <C.ContentBottom>
                    <C.Description>
                        <h3>Informações do produto</h3>
                        <p>{product.description}</p>
                    </C.Description>
                </C.ContentBottom>
                
                {/* <C.Quantity>{prod.items[0].sellers[0].commertialOffer.AvailableQuantity}</C.Quantity>
                
                
                {prod.items[0].sellers[0].commertialOffer.PriceWithoutDiscount} */}
            </C.Product>
        </C.Container>
    )
}