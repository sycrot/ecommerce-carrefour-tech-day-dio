import { Link } from 'react-router-dom'
import * as C from './styles'

interface OffersCategoriesProps {
    link: string
    image: string
    name: string
}

export const OffersCategories = (props: OffersCategoriesProps) => {
    return (
        <C.Container>
            <C.CategoryContainer>
                <Link to={`/categories/${props.link}`}>
                    <C.Category>
                        <img src={props.image} alt="category" />
                        <p>{props.name}</p>
                    </C.Category>
                </Link>
            </C.CategoryContainer>
        </C.Container>
    )
}