import styled from "styled-components"
import bannerImg from '../../assets/banner.png'

const BannerStyle = styled.figure `
    max-width: 100%;
    min-height: 328px;
    margin: 0;
    flex-grow: 1;
    display: flex;
    align-items: center;
    border-radius: 20px;
    background-image: url(${bannerImg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    p {
        max-width: 300px;
        font-weight: 400;
        font-size: 40px;
        line-height: 48px;
        padding: 0 64px;
        color: #FFFFFF;
    }
`

export const Banner = () => {
    return (
        <BannerStyle>
            <p>A galeria mais completa de fotos do espaço!</p>
        </BannerStyle>
    )
}