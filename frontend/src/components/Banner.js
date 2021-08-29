import React, {useState} from "react";
import loginImage from "../images/test.jpg";
import styled from 'styled-components'
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-router-dom'


export const BannerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 70vh;
    position: relative;
    z-index: 1;
`

export const BannerBG = styled.div `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

export const ImageBG = styled.div`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
`

export const BannerContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const BannerH1 = styled.h1`
    color: #1bb198;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size : 40px;
    }

    @media screen and (max-width: 480px)
    {
        font-size: 32px;
    }
`

export const BannerH2 = styled.h1`
    color: #1bb198;
    font-size: 30px;
    text-align: center;
  margin-left: 50px;

    @media screen and (max-width: 768px) {
        font-size : 40px;
    }

    @media screen and (max-width: 480px)
    {
        font-size: 32px;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const BannerP = styled.p`
    margin-top: 24px;
    color: #010606;
    text-shadow: 1px 1px 1px #ededed;
    font-size: 23px;
    font-style: italic;
    font-weight: 500;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size : 24px;
    }

    @media screen and (max-width: 480px)
    {
        font-size: 18px;
    }
`

export const BannerBtnWrapper = styled.div`
    font-style: 'Varela Round', sans-serif;
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward= styled(MdArrowForward)`
   margin-left : 8px;
   font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
   margin-left : 8px;
   font-size: 20px;
`

export const Button = styled(Link)`
  border-radius: 50px;
  background: #191919;
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#61c5b4' : '#ededed')};
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
    background: ${({primary}) => (primary ? '#ededed' : '#61c5b4')};
  }
`

const Banner = () => {

    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover)
    }

    return (
        <BannerContainer>
            <BannerContent>
                <Wrapper>
                    <BannerH1>Evan HAYS</BannerH1>
                    <BannerH2>22 ans</BannerH2>
                </Wrapper>
                <BannerP>Elève ingénieur en informatique de 5e année à l'EPITA à la recherche d’un stage de fin d'etude
                debut fevrier</BannerP>
                <BannerBtnWrapper>
                    <Button to="/" 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        big='false'>
                        About Me {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </BannerBtnWrapper>
            </BannerContent>
        </BannerContainer>
    );
};

export default Banner;