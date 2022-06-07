import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    margin-top: 1em;
    overflow: hidden;
`

export const Title = styled.h3`
    width: 100%;
    border-bottom: 2px solid #cecece;
    padding: 0.4em 0;
    font-weight: 500;
    font-size: 1.5em;
    color: #02458C;
`

export const ProductsContent = styled.div`
    width: 100%;
    display: flex;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    position: relative;

    &::-webkit-scrollbar {
        width: 20px;
    }

    &::-webkit-scrollbar-track {
        /* background: transparent; */
        background: #cecece;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        /* background: transparent; */
        background: #02458C;
        border-radius: 10px;
    }
`

export const Actions = styled.div`
    position: absolute;
    background: #fff;
    color: #02458C;
    width: 52px;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 40%;
    cursor: pointer;
    transition: all .2s ease-in-out;
    border: 2px solid #02458C;

    i {
        display: block;
        width: 30px;
    }

    &:hover {
        background: #02458C;
        color: #fff;
    }
`