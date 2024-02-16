import React from 'react';
import { Link } from "react-router-dom";
import View from '../../Components/view';
import Navbar from '../../Components/navbar';
import Folders from '../../Components/folders';
function NNView () {

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
                <Link className="folder-link" to='/open-aim-utd/Topics/NN/view' style={{textDecoration:'none',color:'black', display:'inline-block'}}>
                    <h1>Neural Networks</h1>
                </Link>
            </span>
        </div>
        <div className="content-list">
            <h2>Grant Sanderson {'(3Blue1Brown)'} videos</h2>
            <ul>
                <li>
                    <Link to='/open-aim-utd/Topics/NN/introduction'
                    style={{textDecoration:'none',color:'purple'}}
                    >
                        <p>Introduction to neural networks</p>
                    </Link>
                </li>
                <li>
                    <Link to='https://www.youtube.com/watch?v=aircAruvnKk&list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi&ab_channel=3Blue1Brown'
                    style={{textDecoration:'none',color:'purple'}}
                    target="_blank">
                        <p>But what is a neural network? {'(1/4)'}</p>
                    </Link>
                </li>
                <li>
                    <Link to='https://www.youtube.com/watch?v=IHZwWFHWa-w&list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi&index=2&ab_channel=3Blue1Brown'
                    style={{textDecoration:'none',color:'purple'}}
                    target="_blank">
                        <p>Gradient descent, how neural networks learn {'(2/4)'}</p>
                    </Link>
                </li>
                <li>
                    <Link to='https://www.youtube.com/watch?v=IHZwWFHWa-w&list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi&index=2&ab_channel=3Blue1Brown'
                    style={{textDecoration:'none',color:'purple'}}
                    target="_blank">
                        <p>What is backpropogation really doing? {'(3/4)'}</p>
                    </Link>
                </li>
                <li>
                    <Link to='https://www.youtube.com/watch?v=tIeHLnjs5U8&list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi&index=4&ab_channel=3Blue1Brown'
                    style={{textDecoration:'none',color:'purple'}}
                    target="_blank">
                        <p>Backpropogation calculus {'(4/4)'}</p>
                    </Link>
                </li>
            </ul>
            <h2>More Practical ML</h2>
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

export default NNView;