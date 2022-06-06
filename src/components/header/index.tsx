import { useState } from "react"
import { Link } from "react-router-dom"
import * as C from './styles'
import Logo from '../../logo.svg'
import * as I from '../../common/icons'

export const Header = () => {
    const [handleNavState, setHandleNavState] = useState(false)

    const setHandleNav = () => {
        if (handleNavState === false) {
            setHandleNavState(true)
        } else {
            setHandleNavState(false)
        }
    }

    const handleNav = () => {
        if (handleNavState === true) {
            return 'block'
        } else {
            return 'none'
        }
    }

    return (
        <C.Header>
            <C.Logo><img src={Logo} alt="Logo" /><span>Carrefour</span></C.Logo>
            <C.Search><input type="text" placeholder="Pesquise aqui..."/><i>{I.Search}</i></C.Search>
            <C.ButtonNav onClick={() => setHandleNav()}>
                {I.Menu}
            </C.ButtonNav>
            <C.Actions>
                <C.ActionItem>{I.Bag}<i>1</i></C.ActionItem>
            </C.Actions>
            
            <C.Nav display={handleNav()}>
                <Link to="/categories">
                    <C.NavItem>Categoria</C.NavItem>
                </Link>
                <Link to="/categories">
                    <C.NavItem>Categoria</C.NavItem>
                </Link>
                <Link to="/categories">
                    <C.NavItem>Categoria</C.NavItem>
                </Link>
                <Link to="/categories">
                    <C.NavItem>Categoria</C.NavItem>
                </Link>
                <Link to="/categories">
                    <C.NavItem>Categoria</C.NavItem>
                </Link>
                <Link to="/categories">
                    <C.NavItem>Categoria</C.NavItem>
                </Link>
                <Link to="/categories">
                    <C.NavItem>Categoria</C.NavItem>
                </Link>
            </C.Nav>
        </C.Header>
    )
}