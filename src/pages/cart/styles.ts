import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width: 880px;
    padding: 1em;
`

export const PageNull = styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 300px;

    div {
        height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    i {
        display: block;
        width: 130px;
        color: #006CAE;
    }

    span {
        font-size: 1.2em;
        margin-bottom: 2em;
    }

    small {
        font-size: 1em;

        a {
            text-decoration: none;
            color: #02458C;
            border-radius: 5px;
            padding: 1em;
            transition: all .2s ease-in-out;

            &:hover {
                border: 1px solid #02458C;
                filter: drop-shadow(2px 2px 2px rgba(100, 172, 216, 0.4));
            }
        }
    }
`

export const Product = styled.div`
    display: flex;
    border-bottom: 2px solid #cecece;
    padding: 1em 0;
    justify-content: space-between;
    flex-wrap: wrap;
    
    a {
        text-decoration: none;
    }
`

export const ProductContent = styled.div`
    display: flex;
    overflow: hidden;
`

export const Info = styled.div`
`

export const Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 50px;
    }

    @media screen and (min-width: 980px) {
        img {
        width: 120px;
    }
    }
`

export const Title = styled.div`
    width: 150px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-top: 1em;
    color: #02458C;

    @media screen and (min-width: 980px) {
        width: 450px;
    }
`

export const Price = styled.div`
    font-size: 1.5em;
    font-weight: bold;
    color: #4c4c4c;

    span {
        font-size: 0.6em;
        color: #717171;
    }
`

export const Quantity = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
        font-size: 0.9em;
        font-weight: bold;
    }

    input {
        width: 40px;
        height: 30px;
        -moz-appearance: textfield;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spint-button {
        -webkit-appearance: none;
        margin: 0;
    }
`

export const Action = styled.div`
    width: 20px;
    color: #02458C;
    cursor: pointer;
`

export const QuantityValue = styled.div``

export const Actions = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`

export const TotalValue = styled.div`
    font-size: 1.6em;
    font-weight: bold;
    color: #464646;

    span {
        font-weight: 400;
    }
`

export const Pay = styled.button`
    width: 100%;
    max-width: 300px;
    height: 60px;
    font-size: 1.2em;
    color: #02458C;
    background: none;
    border-radius: 5px;
    border: 2px solid #02458C;
    transition: all .2s ease-in-out;
    cursor: pointer;

    &:hover {
        color: #fff;
        background: #02458C;
    }
`

export const Delete = styled.button`
    width: 60px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0.5em;
    background: #F33F00;
    border: none;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    transition: all .2 ease-in-out;

    span {
        font-size: 0.9em;
        font-weight: bold;
    }

    i {
        display: block;
        width: 26px;
    }

    &:hover {
        outline: 2px solid #AE2D00;
        filter: drop-shadow(3px 3px 3px  rgba(246, 128, 86, 0.4));
    }

    @media screen and (min-width: 980px) {
        margin-top: 2em;
    }
`