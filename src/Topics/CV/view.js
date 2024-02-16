import React from 'react';
import { Link } from "react-router-dom";
import View from '../../Components/view';
import Navbar from '../../Components/navbar';
import Folders from '../../Components/folders';
function CVView () {

    return (
        <>
        <Navbar></Navbar>
        <div className="folders">
            <span className="folder-link-container">
                <Link className="folder-link" to='/open-aim-utd/' style={{textDecoration:'none',color:'black', display:'inline-block'}}>
                    <h1>Home</h1>
                </Link>
            </span>
            <h1 className="separator" >{'>'}</h1>
            <span className="folder-link-container">
                <Link className="folder-link" to='/open-aim-utd/Topics/CV/view' style={{textDecoration:'none',color:'black', display:'inline-block'}}>
                    <h1>Computer Vision</h1>
                </Link>
            </span>
        </div>
        <div className="content-list">
                <h2>Visual Preprocessing</h2>
                <ul>
                    <li>
                        <Link to='https://www.youtube.com/watch?v=-LD9MxBUFQo&ab_channel=FirstPrinciplesofComputerVision'
                        style={{textDecoration:'none',color:'purple'}}
                        target="_blank">
                            <p>Linear image filters pt. 1</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='https://www.youtube.com/watch?v=7AlwDYmjrcs&list=PL2zRqk16wsdqXEMpHrc4Qnb5rA1Cylrhx&ab_channel=FirstPrinciplesofComputerVision'
                        style={{textDecoration:'none',color:'purple'}}
                        target="_blank">
                            <p>Edge detection playlist</p>
                        </Link>
                    </li>
                </ul>
                <h2>Convolutional Neural Networks</h2>
                <ul>
                    <li>
                        <Link to='https://www.youtube.com/watch?v=vT1JzLTH4G4&list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv&index=1&ab_channel=StanfordUniversitySchoolofEngineering'
                        style={{textDecoration:'none',color:'purple'}}
                        target="_blank">
                            <p>Stanford CNN lecture recordings</p>
                        </Link>
                    </li>
                </ul>
                <h2>Amazon MLU Resources</h2>
                <ul>
                    <li>
                        <Link to='https://www.youtube.com/watch?v=_6CFi2CO2AI&list=PL8P_Z6C4GcuU4knhhCouJujFZ2tTqU-Ta&ab_channel=MachineLearningUniversity'
                        style={{textDecoration:'none',color:'purple'}}
                        target="_blank">
                            <p>Computer Vision Playlist</p>
                        </Link>
                    </li>
                </ul>
                
                
            </div>
        </>
    );
}

export default CVView