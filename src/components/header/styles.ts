import styled from 'styled-components'

export const Header = styled.header`
    width: 100%;
    height: 150px;
    border-bottom: 2px solid #02458c;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;

    position: relative;
    padding: 0 1em;

    @media screen and (min-width: 980px) {
        grid-template-columns: 200px 600px 100px;
        padding: 2em 4em;
    }
`

export const Logo = styled.div`
    grid-column: 2;
    grid-row: 1;
    display: flex;
    align-items: center;

    justify-self: center;
    align-self: end;

    img {
        width: 60px;
    }

    span {
        display: none;
    }

    @media screen and (min-width: 980px) {
        grid-column: 1;
        grid-row: 1;
        display: flex;
        align-items: center;

        justify-self: end;
        align-self: center;
        margin-right: 1.5em;

        img {
            width: 80px;
        }

        span {
            display: block;
            margin-left: 0.4em;
            font-size: 1.4em;
            font-weight: bold;
            color: #02458c;
            font-family: serif;
        }
    }
`

export const Nav = styled.div`
    width: 100%;
    background: #02458c;
    position: absolute;
    top: 150px;

    a {
        text-decoration: none;
    }

    @media screen and (min-width: 980px) {
        grid-column: 1/4;
        grid-row: 2;
        position: relative;
        top: 13px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: none;
    }
`

export const NavItem = styled.div`
    width: 100%;
    text-align: center;
    padding: 1em 0;
    font-size: 1em;
    color: #fff;

    @media screen and (min-width: 980px) {
        color: #02458c;
        margin: 0 1em;
        border-radius: 5px 5px 0 0;
        transition: all .2s ease-in-out;

        &:hover {
            background: #02458c;
            color: #fff;
        }
    }
`

export const ButtonNav = styled.div`
    grid-column: 1;
    grid-row: 1;

    justify-self: start;
    align-self: end;

    cursor: pointer;

    width: 34px;

    color: #02458c;

    @media screen and (min-width: 980px) {
        display: none;
    }
`

export const Actions = styled.div`
    grid-column: 3;
    grid-row: 1;
    justify-self: end;
    align-self: end;
    margin-left: 1.5em;

    @media screen and (min-width: 980px) {
        justify-self: start;
        align-self: center;
    }
`

export const ActionItem = styled.div`
    width: 34px;

    color: #02458c;
    position: relative;
    

    i {
        width: 24px;
        height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        background: #fff;
        outline: 1px solid #02458c;
        border-radius: 50%;
        left: 1em;
        top: 1em;
        color: #02458c;
        font-size: 1em;
        font-weight: bold;
    }

    @media screen and (min-width: 980px) {
        width: 40px;
    }
`

export const Search = styled.div`
    grid-column: 1/4;
    grid-row: 2;
    display: flex;

    justify-self: center;
    align-self: center;

    width: 100%;

    background: #02458c;
    border-radius: 6px;
    position: relative;

    input {
        width: 100%;
        height: 36px;
        border: none;
        outline: none;
        font-size: 1em;
        background: none;
        color: #fff;
        border-radius: 6px;
        padding: 0 1.2em;
        
        &:focus {
            background: #024fa1;
        }

        &::placeholder {
            color: #cecece;
        }
    }

    i {
        width: 24px;
        color: #fff;
        position: absolute;
        right: 0.5em;
        top: 0.2em;
    }

    &:focus {
        background: #024fa1;
    }

    @media screen and (min-width: 980px) {
        grid-column: 2;
        grid-row: 1;
    }
`