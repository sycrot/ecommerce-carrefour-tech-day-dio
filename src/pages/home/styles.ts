import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width: 1180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    padding: 0 1em;
`

export const ListItems = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const Promotion = styled.div`
    width: 370px;
    height: 110px;
    background-image: url(${props => props.bg || 'https://4.bp.blogspot.com/-SrZKb7xVZSg/U9pF4qSBsvI/AAAAAAAAJHQ/3_dxVvmkhlQ/s1600/Imagem+de+divulgacao+-+Julho+2014.jpg'});
    background-size: 100%;
    background-position: 10% 20%;
    color: ${props => props.color || '#fff'};
    border-radius: 6px;
    overflow: hidden;
    text-shadow: 2px 2px 2px rgba(0,0,0,0.3);
    cursor: pointer;

    margin: 0 0.3em 0.3em 0.3em;

    p {
        font-size: 1.2em;
        font-weight: bold;
        line-height: 0.8em;
        text-align: center;
    }
    small {
        font-weight: bold;
    }

    span {
        font-size: 1.4em;
        font-weight: bold;
        word-spacing: -0.3em;
        line-height: 0.8em;
    }
`

export const PromotionTexts = styled.div`
    width: 370px;
    height: 110px;
    background: ${props => `rgba(${props.bg}, 0.8)` || '#fff'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const TitleContent = styled.h3`
    width: 100%;
    border-bottom: 2px solid #cecece;
    padding: 0.4em 0;
    font-weight: 500;
    font-size: 1.5em;
    color: #02458C;
    margin: 1em;
`