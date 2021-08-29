import React, {useState} from "react";
import loginImage from "../images/test.jpg";
import styled from 'styled-components'
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-router-dom'
import MainContainer from "../components/MainContainer"
import { homeObjOne, homeObjTwo } from '../Data/Data';


export const BodyBG = styled.div `
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 120vh;
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


export const BodyCont = styled.div`
    width: 100%;
    display: block;
    position: relative;
    background : #777;
    margin-right: auto;
    margin-left: auto;
    border-radius: 20px;
    padding: 10px 10px 10px 10px;

    @media screen and (max-width: 768px) {
        width: 91%;
    }
`


const BodyContainer = () => {

    return (
        <>
        </>
    );
};

export default BodyContainer;