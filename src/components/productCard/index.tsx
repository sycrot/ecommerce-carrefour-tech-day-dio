import { Link } from 'react-router-dom'
import { handlePrice } from '../../common/services/handlePrice'
import * as C from './styles'
import * as I from '../../common/icons'
import { useState } from 'react'

interface ProductCardProps {
    id: string
    image: string
    name: string
    sellers: number
}

export const ProductCard = (props: ProductCardProps) => {
    const [favorite, setFavorite] = useState(false)

    const addFavorite = () => {
        if (favorite === false) {
            setFavorite(true)
        } else {
            setFavorite(false)
        }
    }

    return (
        <C.Container>
            <C.ActionAddFavorite onClick={() => addFavorite()}>
                        {
                            favorite === false ? I.Heart : I.HeartSolid
                        }
                    </C.ActionAddFavorite>
            <Link to={`/product/${props.id}`} style={{textDecoration: 'none', color: '#000'}}>
                <C.CardProduct>
                    <C.ProductImage><img src={props.image} alt=""/></C.ProductImage>
                    <C.ProductTitle>{props.name}</C.ProductTitle>
                    <C.ProductPrice>
                        <small>R$ {handlePrice(props.sellers + 2)}</small><br/>
                        <span>R$ </span>{handlePrice(props.sellers)}</C.ProductPrice>
                </C.CardProduct>
            </Link>
        </C.Container>
    )
}