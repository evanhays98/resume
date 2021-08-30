import { motion } from 'framer-motion';
import React, {useState} from 'react';
import Header from '../components/Header';
import Banner from "../components/Banner"
import BodyContainer from "../components/BodyContainer"
import MainContainer from "../components/MainContainer"
import ProfilPictures from "../components/ProfilPictures"
import { homeObjOne, homeObjTwo } from '../Data/Data';
import styled from 'styled-components'
import loginImage from "../images/test.jpg";
import Formations from "../components/Formations";
import {Formation1} from "../Data/DataFormation";
import {AiOutlineRight} from "react-icons/all";

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


    @media screen and (max-width: 768px) {
        width: 100%;
      padding-right: 0;
      padding-left: 0;
      padding-top: 150px;
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
    background-size: cover;@media screen and (max-width: 768px) {
        top : -100px;
    }
`

const Presentation = () => {

    const [formation, setFormation] = useState(false)

    const handleFormation = () => {
        setFormation(!formation)
    }

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
                <div className='titre' onClick={handleFormation}>
                    <AiOutlineRight className={formation ? 'display-icons-none' : 'display-icons'}/>
                    <h1 className='text'>Mes Formations</h1>
                </div>
                <div className={formation ? 'listwrapper display' : 'listwrapper display-none'}>
                    <Formations {...Formation1}/>
                    <Formations {...Formation1}/>
                </div>
            </BodyCont>

            <div className='bodyCont'>
                <div className='titre' onClick={handleFormation}>
                    <AiOutlineRight className={formation ? 'display-icons-none' : 'display-icons'}/>
                    <h1 className='text'>Mes Formations</h1>
                </div>
                <div className={formation ? 'listwrapper display' : 'listwrapper display-none'}>
                    <Formations {...Formation1}/>
                    <Formations {...Formation1}/>
                </div>
            </div>
            <Footer>
            </Footer>
        </motion.div>
    );
};

export default Presentation;