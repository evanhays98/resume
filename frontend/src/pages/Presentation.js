import { motion } from 'framer-motion';
import React from 'react';
import Header from '../components/Header';
import Banner from "../components/Banner"
import BodyContainer from "../components/BodyContainer"
import MainContainer from "../components/MainContainer"
import ProfilPictures from "../components/ProfilPictures"
import { homeObjOne, homeObjTwo } from '../Data/Data';
import styled from 'styled-components'
import loginImage from "../images/test.jpg";
import Formations from "../components/Formations";

export const BodyCont = styled.div`
    width: 90%;
    display: block;
    position: relative;
    background : #191919;
    margin-right: auto;
    margin-left: auto;
    border-radius: 20px;
    padding: 15px;
    padding-top: 150px;
    padding-bottom: 40px;


    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0px;
    }
`

export const BannerBG = styled.div `
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

export const Footer = styled.div `
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;

    @media screen and (max-width: 768px) {
        height: 0px;
    }
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

const Presentation = () => {
    return (
        <motion.div className="presentation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <BannerBG >
                <ImageBG style={{ backgroundImage: `url(${loginImage})`}}></ImageBG>
            </BannerBG>
            <Banner />
            <BodyCont>
                <ProfilPictures />
                <Formations></Formations>
            </BodyCont>
            <Footer>
            </Footer>
        </motion.div>
    );
};

export default Presentation;