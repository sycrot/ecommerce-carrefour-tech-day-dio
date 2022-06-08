import { useEffect, useState } from 'react'
import { Product } from '../../types/Product'
import * as C from './styles'
import * as I from '../../common/icons'

export const Cart = () => {
    const storage = localStorage
    const [products, setProducts] = useState<Product[]>([])
    const [totalValue, setTotalValue] = useState(0)

    useEffect(() => {
        const getProducts = () => {
            if (localStorage.hasOwnProperty('cart_list_carrefour')) {
                let list = JSON.parse(storage.getItem('cart_list_carrefour'))

                let newList:Product[] = []

                list.forEach(e => {
                    newList.push(e.product)
                })

                setProducts(newList)
            }
        }
        getProducts()
    }, [storage])

    useEffect(() => {
        const getTotalValue = () => {
            if (localStorage.hasOwnProperty('cart_list_carrefour')) {
                let list = JSON.parse(storage.getItem('cart_list_carrefour'))
                let value = 0
    
                for(let i in list) {
                    value += list[i].product.sellers * list[i].quantity
                }
    
                setTotalValue(value)
            }
        }
        getTotalValue()
    }, [storage])

    const handlePrice = (price: number) => {
        let newPrice = price.toFixed(2).toString()
        let result = newPrice.replace('.', ',')

        return `${result}`
    }

    const handleQuantity = (e: string, id: number) => {
        let list = JSON.parse(storage.getItem('cart_list_carrefour'))

        if (e === 'up') {
            list[id].quantity = list[id].quantity + 1
        } else if (e === 'down') {
            list[id].quantity = list[id].quantity - 1
        }

        localStorage.setItem("cart_list_carrefour", JSON.stringify(list))

        window.location.reload()
    }

    const deleteProduct = (id: number) => {
        let list = JSON.parse(storage.getItem('cart_list_carrefour'))
        
        list.splice(id, 1)

        localStorage.setItem("cart_list_carrefour", JSON.stringify(list))

        window.location.reload()
    }

    return (
        <C.Container>
            {
                products.map((product, index) => (
                    <C.Product key={product.id}>
                        <C.ProductContent>
                            <C.Image><img src={product.image} alt={product.name}/></C.Image>
                            <C.Info>
                                <C.Title>{product.name}</C.Title>
                                <C.Price><span>R$</span> {handlePrice(product.sellers)}</C.Price>
                            </C.Info>
                        </C.ProductContent>
                        <C.Quantity>
                            <span>Quantidade:</span>
                            <C.Action onClick={() => handleQuantity('up', index)}>{I.ChevronUp}</C.Action>
                            <C.QuantityValue>{JSON.parse(storage.getItem('cart_list_carrefour'))[index].quantity}</C.QuantityValue>
                            <C.Action onClick={() => handleQuantity('down', index)}>{I.ChevronDown}</C.Action>
                        </C.Quantity>
                        <C.Delete onClick={() => deleteProduct(index)}>
                            <i>{I.Trash}</i>
                            <span>Excluir</span>
                        </C.Delete>
                    </C.Product>
                ))
            }

            <C.Actions>
                <C.TotalValue><span>Valor total: R$ </span>{handlePrice(totalValue)}</C.TotalValue>
                <C.Pay>Finalizar compra</C.Pay>
            </C.Actions>
        </C.Container>
    )
}