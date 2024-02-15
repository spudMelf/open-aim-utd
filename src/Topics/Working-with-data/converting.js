import React from 'react';
import { Link } from "react-router-dom";
import Content from '../../Components/content';
import Navbar from '../../Components/navbar';
import Folders from '../../Components/folders';
import Bottom from '../../Components/bottom';

// import assets
import CatTable from '../../Assets/cat_table_ex.png';
import CatTable2 from '../../Assets/CatTable2.png';
import CatTable3 from '../../Assets/CatTable3.png';
import CatTable4 from '../../Assets/CatTable4.png';


function DataIntro () {

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
                    <Link className="folder-link" to='/open-aim-utd/Topics/Working-with-data/view' style={{textDecoration:'none',color:'black', display:'inline-block'}}>
                        <h1>Working with Data</h1>
                    </Link>
                </span>
            </div>

            <div className="content">
                <h1>Converting Categorical and Text-based Attributes</h1>
                <p>Unfortunately, computers and algorithms cannot work with text or categorical attributes so we need some way to convert these attributes into something the computer can work with.</p>
                <p>It will be helpful to know about the four types of data before reading this article, so if you haven't watched the video on it I would recommend you do so</p>
                <p>We will cover two approaches to converting text and categorical approaches: ordinal encoding and one-hot encoding.</p>
                <h2>Ordinal Encoding</h2>
                <p>Suppose we are working with a housing dataset that contains an attribute for the ocean_proximity.</p>
                <img className="half" src={CatTable} alt="CatTable" style={{width: "20vw", display: "block", margin:"auto"}}></img>
                <p>Since machines and algorithms need numbers, one way we could convert the following data would be to represent each possible value with its own number.</p>
                <img src={CatTable2} alt="CatTable2" style={{width: "20vw", display: "block", margin:"auto"}}></img>
                <p>We can see now why they call this an ordinal encoder, since it gives the data some ordered number to represent it.</p>
                <p>Using this representation the above data would transform to the following.</p>
                <img src={CatTable3} alt="CatTable3" style={{width: "31vw", display: "block", margin:"auto"}}></img>
                <p>Nice! We have now converted what was originally just text categories into something our machine will be able to use.  There is however a problem with this representation.</p>
                <p>Machine learning algorithms will oftentimes assume that there is a relation between the values, however this is not the case as category 0, {'<1H'} OCEAN is much more similar to category 4 (NEAR OCEAN)  than it is to category 1 (INLAND).  </p>
                <p>For some sets of data, they will be able to be represented ordinally with no further complications, however, let’s look at another way of doing things.</p>
                <h2>One-hot encoding</h2>
                <p>The solution to our problem earlier can be fixed by assigning each different categorical value its own binary feature. </p>
                <img src={CatTable4} alt="CatTable4" style={{width: "45vw", display: "block", margin:"auto"}}></img>
                <p>This process is known as one-hot encoding and while it is an effective representation of the data it comes at the cost of (potentially) significantly increasing the number of dimensions of our data.</p>
                <p>You should be comfortable now with the conceptual understanding and reasoning for the use of these two methods.</p>

            </div>
            <div className="Bottom"></div>
        </div>
    );
}

export default DataIntro