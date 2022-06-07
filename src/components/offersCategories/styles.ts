import styled from 'styled-components'

export const Container = styled.div`
    width: 120px;
    height: 270px;
    margin: 0 1em;

    a {
        text-decoration: none;
    }
`

export const CategoryContainer = styled.div`
    width: 120px;
`

export const Title = styled.h3`
    width: 100%;
    border-bottom: 2px solid #cecece;
    padding: 0.4em 0;
    font-weight: 500;
    font-size: 1.5em;
    color: #02458C;
    margin-bottom: 1em;
`

export const Category = styled.div`
    width: 120px;
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #000;
    transition: all .1s ease-in;
    border: 1px solid #02458C;
    border-radius: 50%;

    &:hover,
    &:hover > img {
        color: #02458C;
        filter: drop-shadow(5px 5px 5px rgba(0, 178, 255, 0.1));
    }

    img {
        width: 130px;
        height: 160px;
        
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: -0.7em;
        margin-bottom: 0.8em;
    }

    p {
        font-size: 1.1em;
    }
`