import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width: 1380px;
    display: flex;
    padding: 1em 0;
`

export const Content = styled.div`
    width: 1200px;
    
`
export const ContentHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1em;
    border-bottom: 2px solid #cecece;

    span {
        display: flex;
        font-weight: lighter;

        p {
            font-weight: bold;
            margin-right: 0.3em;
        }
    }
`
export const ContentProducts = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
`

export const Order = styled.div`
    display: flex;

    span {
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

export const Filter = styled.div`
    width: 230px;
    padding: 1em;
`

export const List = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 2em;

    span {
        font-size: 1.2em;
        margin-bottom: 0.5em;
        color: #004362;
    }

    ul {
        list-style-type: none;
    }

    li {
        width: 100%;
        display: flex;
        justify-content: start;
        align-items: center;

        input {
            position: absolute;
            z-index: -1;
            opacity: 0;
        }

        input + label {
            position: relative;
            cursor: pointer;
            padding-left: 25px;
            margin-bottom: 0.8em;
            transition: all .2s ease-in-out;
        }

        input + label::before {
            content: "";
            position: absolute;
            width: 14px;
            height: 16px;
            left: 0;
            bottom: 0;
            border: solid 2px #cecece;
            border-radius: 4px;
            vertical-align: bottom;
        }

        input + label:hover {
            color: #02458c;
            filter: drop-shadow(2px 2px 2px rgba(95, 228, 255, 0.5));
        }

        input:checked + label::after {
            content: "";
            position: absolute;
            left: 5px;
            bottom: 6px;
            width: 3px;
            height: 6px;
            border-right: solid 4px #02458c;
            border-bottom: solid 4px #02458c;
            transform: rotate(45deg);
        }
    }
`

export const InputRange = styled.input`
    width: 100%;
`

export const MinMax = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`