import React from 'react';
import { Link } from "react-router-dom";
import View from '../../Components/view';
import Navbar from '../../Components/navbar';
import Folders from '../../Components/folders';
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
                <h2>Defining Data</h2>
                <ul>
                    <li>
                        <Link to='/open-aim-utd/Topics/Working-with-data/introduction-to-data'style={{textDecoration:'none',color:'purple'}}>
                            <p>Introduction to working with data</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='https://youtu.be/LuBD49SFpWs?si=k66AA3AEeJrVpCFC'
                        style={{textDecoration:'none',color:'purple'}}
                        target="_blank">
                            <p>Types of data</p>
                        </Link>
                    </li>
                    
                </ul>
                <h2>Processing and Using Data</h2>
                <ul>
                    <li>
                        <Link to='/open-aim-utd/Topics/Working-with-data/converting'
                        style={{textDecoration:'none',color:'purple'}}
                        >
                            <p>Converting categorial and text-based attributes</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='https://www.youtube.com/watch?v=dSCFk168vmo&ab_channel=M%C4%B1sraTurp'
                        style={{textDecoration:'none',color:'purple'}}
                        target="_blank">
                            <p>Train, validation, and test data splits</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='https://www.youtube.com/watch?v=vmEHCJofslg&t=774s&ab_channel=KeithGalli'
                        style={{textDecoration:'none',color:'purple'}}
                        target="_blank">
                            <p>Complete Python Pandas Data Science Tutorial</p>
                        </Link>
                    </li>
                    
                </ul>
                <h2>Amazon MLU Resources</h2>
                <ul>
                    <li>
                        <Link to='https://www.youtube.com/watch?v=kj-sPC6pai4&list=PL8P_Z6C4GcuVQZCYf_ZnMoIWLLKGx9Mi2&ab_channel=MachineLearningUniversity'
                        style={{textDecoration:'none',color:'purple'}}
                        target="_blank">
                            <p>Tabular Data Playlist</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default DataView