import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    background: #02458c;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 4em;
`
export const ListContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 1180px;
    justify-content: space-between;
    margin-bottom: 2em;
    flex-direction: column;

    @media screen and (min-width: 980px){
        flex-direction: row;
    }
`
export const List = styled.div`
    margin-top: 1em;
    ul {
        list-style-type: none;
    }

    .list-title {
        font-weight: bold;
        color: #fff;
        font-size: 1.1em;
        margin-bottom: 0.5em;
    }

    .list-item-box {
        display: flex;
        flex-direction: column;
        color: #fff;
        margin-bottom: 1.5em;
    }

    li a {
        text-decoration: none;
        color: #fff;
    }

    @media screen and (min-width: 980px) {
        margin-top: 0;
    }
`

export const ListItemBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    border: 2px solid #fff;
    border-radius: 5px;
    margin-top: 0.5em;

    i {
        width: 20px;
        height: 20px;
        margin-right: 0.5em;
    }

    @media screen and (min-width: 980px) {
        width: 300px;
    }
`
export const ListItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1em;

    span {
        font-size: 0.9em;
        font-weight: bold;
        color:#fff;
        margin-bottom: 0.5em;
    }

    @media screen and (min-width: 980px){
        margin-top: 0;
    }
`

export const ListItens = styled.div`
    display: flex;
    align-items: center;
`

export const Icon = styled.div`
    width: 50px;
    margin-right: 0.4em;

    img {
        width: 100%;
    }
`

export const IconSocial = styled.div`
    width: 36px;
    margin-right: 0.6em;
    color: ${props => props.color || '#fff'};
    cursor: pointer;
`