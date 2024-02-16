import React from 'react';
import { Link } from "react-router-dom";
import View from '../../Components/view';
import Navbar from '../../Components/navbar';
import Folders from '../../Components/folders';
function NLPView () {

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
                <Link className="folder-link" to='/open-aim-utd/Topics/NLP/view' style={{textDecoration:'none',color:'black', display:'inline-block'}}>
                    <h1>Natural Language Processing</h1>
                </Link>
            </span>
        </div>
        <div className="content-list">
            <h2>NLP Models</h2>
            <ul>
                <li>
                    <Link to='https://www.youtube.com/watch?v=AsNTP8Kwu80&ab_channel=StatQuestwithJoshStarmer'
                    style={{textDecoration:'none',color:'purple'}}
                    target="_blank">
                        <p>Recurrent neural networks</p>
                    </Link>
                </li>
                <li>
                    <Link to='https://www.youtube.com/watch?v=zxQyTK8quyY&ab_channel=StatQuestwithJoshStarmer'
                    style={{textDecoration:'none',color:'purple'}}
                    target="_blank">
                        <p>Transformer neural networks {'(ChatGPT)'}</p>
                    </Link>
                </li>
            </ul>
            <h2>Amazon MLU Resources</h2>
            <ul>
                <li>
                    <Link to='https://www.youtube.com/watch?v=0FXKbEgz-uU&list=PL8P_Z6C4GcuWfAq8Pt6PBYlck4OprHXsw&ab_channel=MachineLearningUniversity'
                    style={{textDecoration:'none',color:'purple'}}
                    target="_blank">
                        <p>NLP playlist</p>
                    </Link>
                </li>
            </ul>
        </div>
        </>
    );
}

export default NLPView