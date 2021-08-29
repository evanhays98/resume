import React from 'react'
import Coverflow from 'react-coverflow';
import Radium, {StyleRoot} from "radium";
import styled from 'styled-components'


export const MainContainerC = styled.div`
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

export const ImgWrap = styled.div`
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 0px 0;
    padding-right: 0;
    border-radius: 20px;
`

const PhotoCover = () => {
    return (
        <MainContainerC>
            <MainWrapper>
                <ImgWrap>
                </ImgWrap>
            </MainWrapper>
        </MainContainerC>
    )
}

export default PhotoCover
