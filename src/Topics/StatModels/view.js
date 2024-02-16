import React from 'react';
import { Link } from "react-router-dom";
import View from '../../Components/view';
import Navbar from '../../Components/navbar';
import Folders from '../../Components/folders';
function StatView () {

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
                <Link className="folder-link" to='/open-aim-utd/Topics/StatModels/view' style={{textDecoration:'none',color:'black', display:'inline-block'}}>
                    <h1>Statistical Models</h1>
                </Link>
            </span>
        </div>
        <div className="content-list">
            <h2>Supervised Learning</h2>
            <ul>
                <li>
                    <Link to='/open-aim-utd/Topics/StatModels/lin_reg'
                    style={{textDecoration:'none',color:'purple'}}
                    >
                        <p>Linear regression</p>
                    </Link>
                </li>
            </ul>
            <h2>Unsupervised Learning</h2>
            <ul>
                <li>
                    <Link to='https://pytorch.org/tutorials/beginner/basics/buildmodel_tutorial.html'
                    style={{textDecoration:'none',color:'purple'}}
                    target="_blank">
                        <p>Implementing a NN with pytorch</p>
                    </Link>
                </li>
                
            </ul>
            
        </div>
        </>
    );
}

export default StatView;