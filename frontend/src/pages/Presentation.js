import { motion } from 'framer-motion';
import React, {useState} from 'react';
import Header from '../components/Header';
import Banner, {ArrowForward, ArrowRight, Button} from "../components/Banner"
import BodyContainer from "../components/BodyContainer"
import MainContainer from "../components/MainContainer"
import ProfilPictures from "../components/ProfilPictures"
import { homeObjOne, homeObjTwo } from '../Data/Data';
import styled from 'styled-components'
import loginImage from "../images/test.jpg";
import Formations from "../components/Formations";
import {Experience1, Experience2, Experience3, Formation1, Formation2, Formation3} from "../Data/DataFormation";
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
    const [experience, setExperience] = useState(false)

    const handleFormation = () => {
        setFormation(!formation)
    }

    const handleExperience = () => {
        setExperience(!experience)
    }

    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover)
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
                <div className='titre' onClick={handleExperience}>
                    <AiOutlineRight className={experience ? 'display-icons-none' : 'display-icons'}/>
                    <h1 className='text'>Mes Experiences</h1>
                </div>
                <div className={experience ? 'listwrapper display' : 'listwrapper display-none'}>
                    <Formations {...Experience1}/>
                    <Formations {...Experience2}/>
                    <Formations {...Experience3}/>
                </div>
                <div className={experience ? 'btnwrap display' : 'btnwrap display-none'}>
                    <button className='btn2' to="/"
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}>
                        Go further {hover ? <ArrowForward /> : <ArrowRight />}
                    </button>
                </div>
            </BodyCont>

            <div className='bodyCont'>
                <div className='titre' onClick={handleFormation}>
                    <AiOutlineRight className={formation ? 'display-icons-none' : 'display-icons'}/>
                    <h1 className='text'>Mes Formations</h1>
                </div>
                <div className={formation ? 'listwrapper display' : 'listwrapper display-none'}>
                    <Formations {...Formation1}/>
                    <Formations {...Formation2}/>
                    <Formations {...Formation3}/>

                </div>
                <div className={formation ? 'btnwrap display' : 'btnwrap display-none'}>
                    <button className='btn2' to="/"
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}>
                        Go further {hover ? <ArrowForward /> : <ArrowRight />}
                    </button>
                </div>
            </div>
            <Footer>
            </Footer>
        </motion.div>
    );
};

export default Presentation;