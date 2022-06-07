import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width: 1180px;
    display: flex;
    justify-content: center;
    padding: 1em 0;
`

export const Filter = styled.div`
    width: 600px;
`

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
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
    display: flex;
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