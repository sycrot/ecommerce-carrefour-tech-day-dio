import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    padding: 1em;
    margin: 2em 0;

    max-width: 1180px;
`

export const Product = styled.div`
    width: 100%;

    @media screen and (min-width: 980px) {
        display: grid;
        grid-template-columns: 60% 40%;
    }
`

export const Image = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;

    img { 
        width: 600px; 
    }

    @media screen and (min-width: 980px) {
        grid-column: 1;
        grid-row: 1;
    }
`

export const Content = styled.div`
    @media screen and (min-width: 980px) {
        grid-column: 2;
        grid-row: 1;
        margin-top: 2em;
    }
`

export const ContentBottom = styled.div`
    @media screen and (min-width: 980px) {
        grid-column: 1/3;
        grid-row: 2;
    }
`

export const Name = styled.div`
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 1em;
`

export const Price = styled.div`
    font-size: 2em;
    font-weight: 500;
    line-height: 0.7em;

    span {
        font-size: 0.6em;
    }

    small {
        font-size: 0.5em;
        color: #cecece;
        text-decoration: line-through;
    }
`

export const Button = styled.button`
    width: 100%;
    height: 50px;
    font-size: 1em;
    border: 2px solid #02458c;
    margin: 0.4em 0;
    border-radius: 4px;
    background: ${props => props.bg || 'transparent'};
    color: ${props => props.color || '#fff'};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    i {
        width: 30px;
        height: 30px;
        display: block;
        left: 1em;
        position: absolute;
    }

    cursor: pointer;

    &:hover {
        filter: brightness(0.9);
    }
`

export const Freight = styled.div`
    width: 100%;
    position: relative;
    margin: 1.5em 0;

    input {
        width: 100%;
        height: 46px;
        border: none;
        background: #e8e8e8;
        padding-left: 2.8em;
        font-size: 0.9em;
        border-radius: 4px;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    i {
        width: 30px;
        position: absolute;
        top: 0.5em;
        left: 0.5em;
        color: #02458c;
    }

    @media screen and (min-width: 980px) {
        margin-top: 3em;
    }
`

export const Description = styled.div`
    margin-top: 2em;

    h3 {
        margin-bottom: 1em;
    }

    p {
        text-align: justify;
    }

`

export const Quantity = styled.div``