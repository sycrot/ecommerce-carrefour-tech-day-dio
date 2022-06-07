import * as C from './styles'

export const Filter = () => {
    return (
        <C.Container>
            <C.List>
                <span>Faixa de Preço</span>
                <C.InputRange type="range" max="20000" min="0"/>
                <C.MinMax><small>R$ 0</small><small>R$ 20.000,00</small></C.MinMax>
            </C.List>

            <C.List>
                <span>Marca</span>
                <ul>
                    <li>
                        <input type="checkbox" id="marca"/>
                        <label htmlFor="marca">Marca</label>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <label>Marca</label>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <label>Marca</label>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <label>Marca</label>
                    </li>
                </ul>
            </C.List>
        </C.Container>
    )
}