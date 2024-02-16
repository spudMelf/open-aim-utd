import React from 'react';
import { Link } from "react-router-dom";
import View from '../../Components/view';
import Navbar from '../../Components/navbar';
import Folders from '../../Components/folders';
function IntroMathView () {

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
                <Link className="folder-link" to='/open-aim-utd/Topics/IntroMath/view' style={{textDecoration:'none',color:'black', display:'inline-block'}}>
                    <h1>Introductory Mathematics</h1>
                </Link>
            </span>
        </div>
        <div className="content-list">
                <h2>Linear Algebra</h2>
                <ul>
                    <li>
                        <Link to='/open-aim-utd/Topics/IntroMath/vectors'style={{textDecoration:'none',color:'purple'}}>
                            <p>Introduction to vectors</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='https://www.youtube.com/watch?v=2spTnAiQg4M&ab_channel=TheOrganicChemistryTutor'
                        style={{textDecoration:'none',color:'purple'}}
                        target="_blank">
                            <p>Matrix multiplication</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='https://www.youtube.com/watch?v=mBcLRGuAFUk&ab_channel=MITOpenCourseWare'
                        style={{textDecoration:'none',color:'purple'}}
                        target="_blank">
                            <p>Advanced: SVD decomposition</p>
                        </Link>
                    </li>
                </ul>
                <h2>Multivariable Calculus</h2>
                <ul>
                    <li>
                        <Link to='https://www.youtube.com/watch?v=AXqhWeUEtQU&ab_channel=KhanAcademy'
                        style={{textDecoration:'none',color:'purple'}}
                        target="_blank">
                            <p>Partial derivatives</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='https://www.youtube.com/watch?v=tIpKfDc295M&ab_channel=KhanAcademy'
                        style={{textDecoration:'none',color:'purple'}}
                        target="_blank">
                            <p>The gradient</p>
                        </Link>
                    </li>
                </ul>
                <h2>Miscellaneous</h2>
                <ul>
                    <li>
                        <Link to='https://www.youtube.com/watch?v=7QmGj1_i3MU&ab_channel=Udacity'
                        style={{textDecoration:'none',color:'purple'}}
                        target="_blank">
                            <p>Convex functions</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default IntroMathView