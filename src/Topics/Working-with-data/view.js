import React from 'react';
import { Link } from "react-router-dom";
import View from '../../Components/view';
import Navbar from '../../Components/navbar';
import Folders from '../../Components/folders';
import VideoIcon from '../../Assets/video_icon.png';


function DataView () {

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
                <Link className="folder-link" to='/open-aim-utd/Topics/Working-with-data/view' style={{textDecoration:'none',color:'black', display:'inline-block'}}>
                    <h1>Working with Data</h1>
                </Link>
            </span>
        </div>
        <div className="content-list">
                <h2>Week 1</h2>
                <ul>
                <h3>Content</h3>
                <ul>
                    <li>
                        <Link to='/open-aim-utd/Topics/Working-with-data/introduction-to-data'style={{textDecoration:'none',color:'purple'}}>
                            <p>Describing data</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='https://youtu.be/LuBD49SFpWs?si=k66AA3AEeJrVpCFC'
                        style={{textDecoration:'none',color:'purple'}}
                        target="_blank">
                            <p>Types of data</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='../open-aim-utd/Topics/IntroMath/vectors'
                        style={{textDecoration:'none',color:'purple'}}
                        target="_blank">
                            <p>Representing data as vectors</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='https://www.youtube.com/watch?v=agvfUvUNI4A'
                        style={{textDecoration:'none',color:'purple'}}
                        target="_blank">
                            <p>One-hot encoding categorial data</p>
                        </Link>
                    </li>
                    </ul>
                    <h3>Colab Tutorials</h3>
                    <ul>
                    <li>
                        <Link to='https://colab.research.google.com/drive/1LpBMhMaXiqpz2_Rxn7asy-d4yLa9MugD?usp=sharing'
                        style={{textDecoration:'none',color:'purple'}}
                        target="_blank">
                            <p>Numpy colab tutorial</p>
                        </Link>
                    </li>
                    <li>
                        <Link to=''
                        style={{textDecoration:'none',color:'purple'}}
                        target="_blank">
                            <p>Pandas colab tutorial</p>
                        </Link>
                    </li>
                    <li>
                        <Link to=''
                        style={{textDecoration:'none',color:'purple'}}
                        target="_blank">
                            <p>Matplotlib colab tutorial</p>
                        </Link>
                    </li>
                  </ul>
                <h3>Optional Assignment</h3>
                <ul>
                    <li>
                        <Link to='https://colab.research.google.com/drive/1cIm0WROsEWz-XW9_n4qLFkvP5Kx8qbpe?usp=sharing'
                        style={{textDecoration:'none',color:'purple'}}
                        target="_blank">
                            <p>Week 1 assignment</p>
                        </Link>
                    </li>
                    </ul>
                </ul>
                <h2>Additional Resources</h2>
                <ul>
                <h3>Amazon MLU Resources</h3>
                <ul>
                    <li>
                        <Link to='https://www.youtube.com/watch?v=kj-sPC6pai4&list=PL8P_Z6C4GcuVQZCYf_ZnMoIWLLKGx9Mi2&ab_channel=MachineLearningUniversity'
                        style={{textDecoration:'none',color:'purple'}}
                        target="_blank">
                            <p>Tabular Data Playlist</p>
                        </Link>
                    </li>
                </ul>
                </ul>
                
            </div>
        </>
    );
}

export default DataView