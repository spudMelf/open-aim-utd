import React from 'react';

import { Link } from "react-router-dom";
import './home.css'

// import components
import Navbar from './Components/navbar';

// import images
import DataPic from './Assets/data.png';
import IntroMathPic from './Assets/home_default.jpeg';
import NNPic from './Assets/neural_networks_icon.png';
import CVPic from './Assets/computer-vision-icon.webp';
import StatModelPic from './Assets/vapnik.jpeg';
import NLPPic from './Assets/nlp-icon.png';

function Home() {
    return (
        <div className="Home">
            <Navbar></Navbar>
            <div className="folders">
                <h1>Home</h1>
            </div>
            <br></br>
            <div className="topic-layout">
                <ul className="ul-layout">
                    <li className="course-icon" id="DataPic-li">  
                            <Link to='/open-aim-utd/Topics/Working-with-data/view' style={{textDecoration:'none'}}>
                                <img src={DataPic} alt="Intro to Math"></img>
                                <p>Working with Data</p>
                            </Link>
                    </li>

                    <li className="course-icon" id="IntroMath-li">  
                            <Link to='/open-aim-utd/Topics/IntroMath/view' style={{textDecoration:'none'}}>
                                <img src={IntroMathPic} alt="Intro to Math"></img>
                                <p>Stable Diffusion</p>
                            </Link>
                    </li>

                    <li className="course-icon" id="StatModel-li">  
                            <Link to='/open-aim-utd/Topics/StatModels/view' style={{textDecoration:'none'}}>
                                <img src={StatModelPic} alt="Statistical Models"></img>
                                <p>Statistical Models</p>
                            </Link>
                    </li>

                    <li className="course-icon" id="NN-li">  
                            <Link to='/open-aim-utd/Topics/NN/view' style={{textDecoration:'none'}}>
                                <img src={NNPic} alt="Intro to Math"></img>
                                <p>Deep Learning</p>
                            </Link>
                    </li>

                    

                    <li className="course-icon" id="CV-li">  
                            <Link to='/open-aim-utd/Topics/CV/view' style={{textDecoration:'none'}}>
                                <img src={CVPic} alt="Intro to Math"></img>
                                <p>Computer Vision</p>
                            </Link>
                    </li>

                    <li className="course-icon" id="NLP-li">  
                            <Link to='/open-aim-utd/Topics/NLP/view' style={{textDecoration:'none'}}>
                                <img src={NLPPic} alt="Intro to Math"></img>
                                <p>Natural Language Processing</p>
                            </Link>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Home;