import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width: 1380px;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 980px){
        flex-direction: row;
        padding: 1em 0;
    }
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 980px){
        width: 1150px;
        margin-right: 1em;
    }
`
export const ContentHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1em;
    border-bottom: 2px solid #cecece;

    span {
        display: none;
        font-weight: lighter;

        p {
            font-weight: bold;
            margin-right: 0.3em;
        }
    }

    @media screen and (min-width: 980px){
        margin-left: 1em;

        span {
            display: flex;
            font-weight: lighter;

            p {
                font-weight: bold;
                margin-right: 0.3em;
            }
        }
    }
`
export const ContentProducts = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media screen and (min-width: 980px){ 
        margin-left: 1em;
        justify-content: start;
    }
`

export const ButtonNextPage = styled.button`
    margin: 2em 0;
    width: 300px;
    height: 60px;
    font-size: 1em;
    background: none;
    border: 2px solid #02458c;
    border-radius: 5px;
    color: #02458c;
    transition: all .2s ease-in-out;
    cursor: pointer;

    &:hover {
        color: #fff;
        background: #02458c;
    }
`

export const Order = styled.div`
    display: flex;

    span {
        display: flex;
        font-size: 1em;
        font-weight: 400;
        margin-right: 0.5em;
    }
    select {
        font-size: 0.9em;
        padding: 0.3em;
        border-radius: 6px;
        outline: none;
        color: #464646;
        transition: all .2s ease-in-out;
        border: none;

        optgroup {
            border: none;
        }
    }

    select:hover {
        outline: 1px solid #02458c;
        color: #02458c;
        filter: drop-shadow(2px 2px 2px rgba(95, 228, 255, 0.5)); 
    }
`

export const Link = styled.div`
    a {
        text-decoration: none;
        color: #02458c;
        margin-top: 1em;
        width: 300px;
        height: 50px;
        border: 2px solid #02458c;
        border-radius: 4px;
        
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all .2s ease-in-out;

        &:hover {
            color: #fff;
            background: #02458c;
        }
    }
`

export const Error = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 5em;
`

export const Icon = styled.div`
    width: 200px;
    color: #B0A804;
`

export const Text = styled.div`
    font-size: 1.1em;
    text-align: center;
    color: #02458c;
`

export const Filter = styled.div`
    width: 300px;
    padding: 1em;
    display: none;
    @media screen and (min-width: 980px){ 
        display: block;
    }
`

export const TitleFilter = styled.div`
        font-size: 1em;
        color: #004362;

        @media screen and (min-width: 980px){ 
            margin-bottom: 0.5em;
            font-size: 1.2em;
        }
`

export const RangePrice = styled.div`
    width: 100%;
`

export const List = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 1em;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 980px){ 
        flex-direction: column;
        margin-bottom: 2em;

        span {
            font-size: 1.2em;
            margin-bottom: 0.5em;
            color: #004362;
        }
    }
`

export const InputRange = styled.div`
    width: 100%;
`

export const MinMax = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`