import React, {useState} from "react";
import loginImage from "../images/test.jpg";
import styled from 'styled-components'
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-router-dom'

export const MainContainerC = styled.div`
    margin: 0 auto;

`

export const MainWrapper = styled.div`
    display: grid;
    position: absolute;
    top : -140px;
    z-index: 1;
    height: calc (0.311526 * 100vh + 30);
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 100px;
    justify-content: center;

    @media screen and (max-width: 768px) {
        top : -100px;
    }
    
`
export const ImgWrap = styled.div`
    height: 250px;
    width: 250px;
    display: flex;
    justify-content: center;

`

export const Img = styled.img`
    width: 100%;
    border-radius: 50%;

    @media screen and (max-width: 768px) {
        width: 70%;
    }
`

const ProfilPictures = () => {

    return (
        <div className='profilePicture'>
            <div className="wrap">
                <img className='img' src={require('../images/evanhays.jpg').default}/>
            </div>
        </div>
    );
};

export default ProfilPictures;