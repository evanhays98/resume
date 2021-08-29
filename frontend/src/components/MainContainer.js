import React, {useState} from "react";
import loginImage from "../images/test.jpg";
import styled from 'styled-components'
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-router-dom'

export const MainContainerC = styled.div`
    color: "#fff";
    background: ${({lightBg}) => (lightBg ? '#f7f8fa' : '#010606')};;
    margin: 0 auto;

    @media screen and (max-width: 768px)
    {
        padding: 100px 0;
    }

`

export const MainWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: calc (0.311526 * 100vh + 45);
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 40px;
    justify-content: center;
`

export const MainRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px)
    {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div `
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.p`
    color: ${({toplinecolor}) => (toplinecolor)};
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#000')};

    @media screen and (max-width: 768px)
    {
        font-size: 37px;
    }
`

export const Subtitle = styled.p`
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};

    @media screen and (max-width: 768px)
    {
        font-size: 16px;
    }
`

export const ButtonWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 0px 0;
    padding-right: 0;
    border-radius: 20px;
`

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary)};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px': '12px 30px')};
    color: ${({colorbtn}) => (colorbtn)};
    font-size: ${({fontBig}) => fontBig ? '20px' : '16px'};
    font-family: 'Varela Round', sans-serif;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;

    &:hover {
        transition: all 0.3s ease-in-out;
        background: ${({secondary}) => (secondary)};
    }
`

const MainContainer = ({id,
                        lightBg,
                        lightText,
                        lightTextDesc,
                        topLine,
                        headline,
                        description,
                        buttonLabel,
                        imgStart,
                        img,
                        alt,
                        toplinecolor,
                        btncolor,
                        primary,
                        secondary,
                        colorbtn,
                        darkText}) => {

    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover)
    }

    return (
        <MainContainerC lightBg={lightBg} id={id}>
            <MainWrapper>
                <MainRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine toplinecolor={toplinecolor}>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        <ButtonWrap>
                            <Button to="/" primary={primary}
                                            secondary={secondary}
                                            colorbtn={colorbtn}>
                            {buttonLabel}</Button>
                        </ButtonWrap>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                        <TopLine toplinecolor={toplinecolor}>{topLine}</TopLine>
                            <Img src={img} alt={alt}></Img>
                        </ImgWrap>
                    </Column2>
                </MainRow>
            </MainWrapper>
        </MainContainerC>

        
    );
};

export default MainContainer;