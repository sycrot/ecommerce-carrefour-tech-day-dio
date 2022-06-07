import * as C from './styles'
import * as I from '../../common/icons'

export const Footer = () => {
    return (
        <C.Container>
            <C.ListContainer style={{borderBottom: '2px solid #0758A4'}}>
                <C.List>
                    <ul>
                        <li className="list-title">Atendimento</li>
                        <li><a href="/">Meus pedidos</a></li>
                        <li><a href="/">Central de atendimento</a></li>
                    </ul>
                </C.List>

                <C.List>
                    <ul>
                        <li className="list-title">Institucional</li>
                        <li><a href="/">Grupo Carrefour</a></li>
                        <li><a href="/">CyberCook</a></li>
                        <li><a href="/">Nutri Escolha</a></li>
                    </ul>
                </C.List>

                <C.List>
                    <ul>
                        <li className="list-title">Políticas Carrefour</li>
                        <li><a href="/">Política de Entregas</a></li>
                        <li><a href="/">Política de Trocas e Devoluções</a></li>
                        <li><a href="/">Política de Cancelamento e Ressarciamento</a></li>
                        <li><a href="/">Termos de Uso</a></li>
                        <li><a href="/">Políticas de Privacidade</a></li>
                    </ul>
                </C.List>

                <C.List>
                    <ul>
                        <li className="list-title">Contato</li>
                        <li className='list-item-box'>
                            <span>Para regiões metropolitanas: </span>
                            <C.ListItemBox><i>{I.Phone}</i> 3004-2222</C.ListItemBox></li>
                        <li className='list-item-box'>
                            <span>Para demais regiões: </span>
                            <C.ListItemBox><i>{I.Phone}</i> 0800-718-222</C.ListItemBox></li>
                        <li className='list-item-box'>
                            <p>Horário de atendimento</p>
                            <p>De segunda a domingo, das 08h às 21h</p>
                        </li>
                    </ul>
                </C.List>
            </C.ListContainer>
            <C.ListContainer>
                <C.ListItem>
                    <span>Formas de pagamento</span>
                    <C.ListItens>
                        <C.Icon><img src="https://raw.githubusercontent.com/FreshVine/Payment-Methods-SVG/master/icons/cards/discover.svg?sanitize=true" alt=""/></C.Icon>
                        <C.Icon><img src="https://raw.githubusercontent.com/FreshVine/Payment-Methods-SVG/master/icons/cards/diners-club.svg?sanitize=true" alt=""/></C.Icon>
                        <C.Icon><img src="https://raw.githubusercontent.com/FreshVine/Payment-Methods-SVG/master/icons/cards/mastercard.svg?sanitize=true" alt=""/></C.Icon>
                        <C.Icon><img src="https://raw.githubusercontent.com/FreshVine/Payment-Methods-SVG/master/icons/cards/visa.svg?sanitize=true" alt=""/></C.Icon>
                        <C.Icon><img src="https://raw.githubusercontent.com/FreshVine/Payment-Methods-SVG/master/icons/cards/pay-with-google.svg?sanitize=truee" alt=""/></C.Icon>
                    </C.ListItens>
                </C.ListItem>
                <C.ListItem>
                    <span>Siga-nos nas redes sociais</span>
                    <C.ListItens>
                        <C.IconSocial color="#E4405F">{I.Instagram}</C.IconSocial>
                        <C.IconSocial color="#1877F2">{I.Facebook}</C.IconSocial>
                        <C.IconSocial color="#1DA1F2">{I.Twitter}</C.IconSocial>
                    </C.ListItens>
                </C.ListItem>
            </C.ListContainer>
        </C.Container>
    )
}