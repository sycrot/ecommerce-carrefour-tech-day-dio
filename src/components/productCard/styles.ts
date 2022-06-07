import styled from 'styled-components'

export const CardProduct = styled.div`
    width: 170px;
    height: 280px;
    padding: 0.5em 1em;
    overflow: hidden;
    margin: 0.3em;
    border-radius: 4px;
    border: 1px solid #eaeaea;
    cursor: pointer;
    scroll-snap-align: start;

    @media screen and (min-width: 980px) {
        width: 279px;
        height: 360px;
        transition: all .2s ease-in-out;

        &:hover {
            box-shadow: 3px 3px 10px #ededed;
        }
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
    height: 44px;
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