import React from 'react';
import { Link } from "react-router-dom";
import Content from '../../Components/content';
import Navbar from '../../Components/navbar';
import Folders from '../../Components/folders';
import Bottom from '../../Components/bottom';

// import assets
import Iris from '../../Assets/iris.png'

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
                
                <h2>“In god we trust; all others bring data”</h2>
                <p style={{'margin-top': '0'}}>- W. Edwards Deming, Economist and Mathematician</p>
                <h1>Introduction to Data</h1>
                <p>For most machine learning problems, data is just as important –if not more important– than the algorithm you choose to analyze the data with.</p>
                <p>Without high quality, well representative, and clean data your algorithm will not be able to make good predictions.  </p>
                <p>In this article we get introduced to some of the common definitions used in the data science space.</p>
                <h2>Definitions</h2>
                <p>Suppose that we have the following table of data on flowers, and we are trying to predict the flower species based on some measurements.  <br></br><br></br>How can we describe this data to another engineer in our department? </p>
                <img src={Iris} alt="iris flower dataset visual"></img>
                <p>To start, notice that we have 150 rows of data that we’re looking at here. </p>
                <p>Each individual entry is commonly referred to as an <i>instance, data point, samples, or observation</i>.</p>
                <p>Applying that terminology we could say that we have 150 instances of flowers that we are currently looking at.</p>
                <p>Notice that each flower has some data attached to it as well like Sepal length, Sepal width, Petal length, and Petal width.  </p>
                <p>These are called <i>features, attributes, or dimensions</i> and they represent some measurements we have obtained for our set of samples.  </p>
                <p>Lastly, we have our class labels or targets column which represents the value we are trying to predict (species in this case).  </p>
                <p>We should now feel comfortable describing data using these words.</p>
            
            </div>
            <div className="Bottom"></div>
        </div>
    );
}

export default DataIntro