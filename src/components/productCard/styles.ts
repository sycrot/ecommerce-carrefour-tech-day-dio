import styled from 'styled-components'

export const CardProduct = styled.div`
    width: 180px;
    height: 280px;
    padding: 0.5em 1em;
    overflow: hidden;
    margin: 0.4em;
    box-shadow: 3px 5px 10px rgba(0,0,0,0.2);
    border-radius: 4px;
    cursor: pointer;

    @media screen and (min-width: 980px) {
        width: 250px;
        height: 360px;
    }
`

export const ProductImage = styled.div`
    width: 100%;
    height: 150px;
    overflow: hidden;

    img {
        width: 100%;
    }

    @media screen and (min-width: 980px) {
        height: 220px;
    }
`

export const ProductTitle = styled.div`
    font-weight: bold;
    width: 100%;
    height: 42px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media screen and (min-width: 980px) {
        white-space: normal;
    }
`

export const ProductPrice = styled.div`
    font-size: 1.8em;
    font-weight: bold;
    line-height: 0.8em;

    span {
        font-weight: lighter;
        font-size: 0.6em;
        margin-top: -1em;
    }

    small {
        font-size: 0.6em;
        text-decoration: line-through;
        color: #cecece;
    }
`