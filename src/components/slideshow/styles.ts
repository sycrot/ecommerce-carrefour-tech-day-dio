import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 1.2em;
`

export const Action = styled.div`
    position: absolute;
    width: 40px;
    height: 40px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #02458c;
    transition: all .2s ease-in;
    z-index: 1;

    top: 40%;
    i {
        display: block;
        width: 20px;
    }

    &:hover {
        background: #02458c;
        color: #fff;
    }
`

export const SlideContent = styled.div`
    width: 100%;
    height: 138px;
    display: flex;
    position: relative;
    background: red;
    justify-content: center;
    overflow: hidden;

    .slide-image {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        

        img {
            width: 620px;
        }
    }

    .slide-animation {
        animation: slidein 1s;
    }

    .slider-paginator-active {
        background: #007CFF;
    }

    @media screen and (min-width: 980px){
        height: 263px;

        .slide-image {

            img {
                width: 100%;
            }
        }
    }

    @keyframes slidein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`

export const SlidesAct = styled.div`
    width: 120px;
    position: absolute;
    bottom: 0;
    display: none;
    padding: 0.5em 0;
    border-radius: 9px 9px 0 0;

    @media screen and (min-width: 980px) {
        display: flex;
        justify-content: center;
    }
`

export const Slider = styled.div`
    width: 16px;
    height: 16px;
    border: 2px solid #007CFF;
    background: ${props => props.active || 'rgba(0, 124, 255, 0.2)'};
    border-radius: 50%;
    margin: 0 0.3em;
    cursor: pointer;
`