import React from 'react';
import { Link } from "react-router-dom";
import Content from '../../Components/content';
import Navbar from '../../Components/navbar';
import Folders from '../../Components/folders';
import Bottom from '../../Components/bottom';

// import assets
import Iris from '../../Assets/iris.png'

function NNIntro () {

    return (
        <div className="pageRoot">
            <Navbar></Navbar>
            <div className="folders">
                <span className="folder-link-container">
                    <Link className="folder-link" to='/open-aim-utd/' style={{textDecoration:'none',color:'black', display:'inline-block'}}>
                        <h1>Home</h1>
                    </Link>
                </span>
                <h1 className="separator" >{'>'}</h1>
                <span className="folder-link-container">
                    <Link className="folder-link" to='/open-aim-utd/Topics/NN/view' style={{textDecoration:'none',color:'black', display:'inline-block'}}>
                        <h1>Neural Networks</h1>
                    </Link>
                </span>
            </div>

            <div className="content">
                
                <h1>Introduction to Neural Networks</h1>
                <p>It would be truly difficult to undersell how impactful neural networks have been in the field of machine learning and in our day-to-day lives in general.  </p>
                <p>Inspired by –and loosely based off of– the real neurons in our brains, neural networks have proven to be one of the most powerful tools in any machine learning engineer’s toolbox.  </p>
                <p>In the 2010s, a deep neural network (one with many layers) named Alexnet emerged and outperformed many other image recognition models.  This renewed interest and funding in artificial intelligence, and is one of the reasons why AI has become so popular today.  </p>
                <p>I truly believe that no one provides a better introduction and overview of how a neural network works than Grant Sanderson of 3Blue1Brown.  </p>
                <p>His videos are linked in the parent folder.  I would take your time watching them and really processing them.  </p>
                <p>This is where things start to get really exciting!</p>

            </div>
            <div className="Bottom"></div>
        </div>
    );
}

export default NNIntro