import * as C from './styles'
import * as I from '../../common/icons'
import { useState } from 'react'

export const SlideShow = () => {
    const [numSlide, setNumSlide] = useState(0)
    const [slideAnimate, setSlideAnimate] = useState('')

    const images = [
        {
            image: "https://carrefourbr.vtexassets.com/assets/vtex.file-manager-graphql/images/4c8821f7-e49e-4f30-a18f-05dc7e1bd207___060a50fc324d5c4369c131e79ec78910.png",
            link: ""
        },
        {
            image: "https://carrefourbr.vtexassets.com/assets/vtex.file-manager-graphql/images/864669c2-2240-4935-826f-1ca5b66a1f23___707e110c86c23b77943b0d94f4db9293.png",
            link: ""
        },
        {
            image: "https://carrefourbr.vtexassets.com/assets/vtex.file-manager-graphql/images/63d3ea6a-bc33-49ab-b520-a31235005b2c___e1764b9d5ef27162c617759e6595f211.png",
            link: ""
        },
        {
            image: "https://carrefourbr.vtexassets.com/assets/vtex.file-manager-graphql/images/be7f918f-5139-49ed-aa39-33fbdae9b4fa___de25692f886d9b2a24e329306ba5156b.png",
            link: ""
        }
    ]

    const handleNextSlide = () => {
        return images[numSlide]
    }

    const handleNextSlideAct = (num: number) => {
        setNumSlide(num)
        animateSlide()
    }

    const handleNextNum = () => {
        if (numSlide < images.length - 1) {
            setNumSlide(numSlide + 1)
            animateSlide()
        } else {
            setNumSlide(0)
            animateSlide()
        }
    }

    const handlePrevNum = () => {
        if (numSlide > 0) {
            setNumSlide(numSlide - 1)
            animateSlide()
        } else {
            setNumSlide(images.length - 1)
            animateSlide()
        }
    }

    const animateSlide = () => {
        setInterval(() => {
            setSlideAnimate('slide-animation')
        }, 100)
        setSlideAnimate('')
    }

    return (
        <C.Container>
            <C.Action onClick={() => handlePrevNum()} style={{left: 0, borderRadius: '0 1em 1em 0'}}>
                <i>{I.ChevronLeft}</i>
            </C.Action>
            <C.SlideContent>
                <a href="/">
                    <div id="slide1" className={`slide-image ${slideAnimate}`}><img src={handleNextSlide().image} alt="slideimage"/></div>
                </a>
                <C.SlidesAct>
                    {
                        images.map((image, index) => (
                            <C.Slider key={index} onClick={() => handleNextSlideAct(index)}></C.Slider>
                        ))
                    }
                </C.SlidesAct>
            </C.SlideContent>
            
            <C.Action onClick={() => handleNextNum()} style={{right: 0, borderRadius: '1em 0 0 1em'}}>
                <i>{I.ChevronRight}</i>
            </C.Action>
        </C.Container>
    )
}