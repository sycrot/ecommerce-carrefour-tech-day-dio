import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    padding: 1em;
    background: #cecece;
`

export const List = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 2em;

    span {
        font-size: 1.1em;
        margin-bottom: 0.5em;
    }

    ul {
        list-style-type: none;
    }

    li {
        width: 100%;
        display: flex;
        justify-content: start;
        align-items: center;

        label {
            margin-left: 0.5em;
        }

        input {
            position: absolute;
            z-index: -1;
            opacity: 0;
        }

        input + label {
            position: relative;
            cursor: pointer;
            padding-left: 30px;
        }

        input + label::before {
            content: "";
            position: absolute;
            width: 20px;
            height: 20px;
            left: 0;
            bottom: 0;
            border: solid 2px;
            vertical-align: bottom;
        }

        input:checked + label::after {
            content: "";
            position: absolute;
            left: 10px;
            bottom: 10px;
            width: 10px;
            height: 20px;
            border-right: solid 3px green;
            border-bottom: solid 3px green;
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