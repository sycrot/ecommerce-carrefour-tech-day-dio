import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import * as C from './styles'
import Logo from '../../logo.svg'
import * as I from '../../common/icons'

export const Header = () => {
    const [handleNavState, setHandleNavState] = useState(false)
    const [handleNavListState, setHandleNavListState] = useState(false)
    
    let navigate = useNavigate()
    const [textSearch, setTextSearch] = useState('')

    const getNumProducts = () => {
        if (localStorage.hasOwnProperty('cart_list_carrefour')) {
            let list = JSON.parse(localStorage.getItem('cart_list_carrefour'))

            return list.length
        }
    }

    const setHandleNav = (handle: boolean, state) => {
        if (handle === false) {
            state(true)
        } else {
            state(false)
        }
    }

    const handleNav = (handle: boolean) => {
        if (handle === true) {
            return 'block'
        } else {
            return 'none'
        }
    }

    const handleProductsPerName = (event: HTMLInputElement) => {
        setTextSearch(event.value)
        event.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                return navigate(`/products/search/${event.value}`)
            }
        })
    }

    return (
        <C.Header>
            <C.Logo>
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                    <span>Carrefour</span>
                </Link>
            </C.Logo>
            <C.Search>
                <input type="text" placeholder="Pesquise aqui..." onChange={e => handleProductsPerName(e.target)} />
                <Link to={`/products/search/${textSearch}`}>
                    <i>{I.Search}</i>
                </Link>
            </C.Search>
            <C.ButtonNav onClick={() => setHandleNav(handleNavState,setHandleNavState)}>
                {I.Menu}
            </C.ButtonNav>
            
            <C.Actions>
                <Link to="/cart">
                <C.ActionItem>{I.Cart}<i>{getNumProducts()}</i></C.ActionItem>
                </Link>
            </C.Actions>
            
            
            <C.Nav display={handleNav(handleNavState)}>
                <C.AllItems>
                    <C.ListTitle onClick={() => setHandleNav(handleNavListState, setHandleNavListState)}>
                        <span>Todos os departamentos</span>
                        <i>{handleNavListState === true ? I.ChevronUp : I.ChevronDown}</i></C.ListTitle>
                    <C.ListAll display={handleNav(handleNavListState)}>
                        <li onClick={() => setHandleNavListState(false)}><Link to="/products/categories/Mercearia">Mercearia</Link></li>

                        <li onClick={() => setHandleNavListState(false)}><Link to="/products/categories/Hortifruti">Hortifruti</Link></li>

                        <li onClick={() => setHandleNavListState(false)}><Link to="/products/categories/A??ucar">A??ucar e Ado??ante</Link></li>

                        <li onClick={() => setHandleNavListState(false)}><Link to="/products/categories/Massas+Molhos">Massas e Molhos</Link></li>

                        <li onClick={() => setHandleNavListState(false)}><Link to="/products/categories/Doces+Confeitaria">Doces e Confeitaria</Link></li>
                        
                        <li onClick={() => setHandleNavListState(false)}><Link to="/products/categories/Notebooks">Notebooks</Link></li>
                        <li onClick={() => setHandleNavListState(false)}><Link to="/products/categories/Eletrodomesticos">Eletrodom??sticos</Link></li>
                        
                    </C.ListAll>
                </C.AllItems>
                <Link to="/products/categories/Mercearia">
                    <C.NavItem>Mercearia</C.NavItem>
                </Link>
                <Link to="/products/categories/Notebooks">
                    <C.NavItem>Notebooks</C.NavItem>
                </Link>
                <Link to="/products/categories/Eletrodomesticos">
                    <C.NavItem>Eletrodom??sticos</C.NavItem>
                </Link>
                <Link to="/products/categories/Smartphones">
                    <C.NavItem>Smartphones</C.NavItem>
                </Link>
                <Link to="/products/categories/Moveis">
                    <C.NavItem>M??veis</C.NavItem>
                </Link>
            </C.Nav>
        </C.Header>
    )
}