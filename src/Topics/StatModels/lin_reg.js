import React from 'react';
import { Link } from "react-router-dom";
import Content from '../../Components/content';
import Navbar from '../../Components/navbar';
import Folders from '../../Components/folders';
import Bottom from '../../Components/bottom';

// import assets
import LinReg0 from '../../Assets/LinReg0.png'
import LinReg1 from '../../Assets/LinReg1.png'
import LinReg2 from '../../Assets/LinReg2.png'
import LinReg3 from '../../Assets/LinReg3.png'
import LinReg4 from '../../Assets/LinReg4.png'




var Latex = require('react-latex');


function LinearRegression () {

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
                    <Link className="folder-link" to='/open-aim-utd/Topics/StatModels/view' style={{textDecoration:'none',color:'black', display:'inline-block'}}>
                        <h1>Statistical Models</h1>
                    </Link>
                </span>
            </div>

            <div className="content">
                
                <h1>Linear Regression</h1>
                <h2>Introduction</h2>
                <p>We begin our explorationof statistical models with the problem of finding the line of best fit for a continuous variable also known as linear regression</p>
                <p>Let’s say that we are attempting to find a linear equation that could accurately predict the following set of data.</p>
                <img src={LinReg0} alt="LinReg0"></img>
                <p>While you could probably draw a good line through these points and explain why your line is a good choice, let’s try to solidify the mathematical expression of our problem so we know that the solution we are finding is (close to) optimal.  </p>
                <p>Essentially for this problem we are given, as input, a set of points<Latex style={{display:"inline"}}>$(x_1, y_1), ... , (x_m, y_m)$</Latex></p>
                <p>With <Latex>$x_m, y_m \in R$</Latex>.  For our output we are looking for a linear function <Latex>$f(x)=ax+b$</Latex> where <Latex>$a,b \in R$</Latex>.</p>
                <p>In simpler terms, our input data is a set of m real-numbered points (x, y); and we would like to find a linear equation that fits this data the best with slope ‘a’ and y-intercept ‘b’.  </p>
                <p>We will refer to <Latex>$a$</Latex> and <Latex>$b$</Latex> as being parameters: values we can change in order to control the model (or function in this case), and <Latex>$f(x)$</Latex> as being our model.</p>
                <p>Since we are given the class (or target) labels <Latex>$y_1, ... , y_m$</Latex> we consider this to be a supervised learning problem which simply means we know what our target (true) values are.</p>
                <p>This problem of finding a line of best fit is a common one that you’ve probably already faced before in a physics or chemistry class, but how can we approach it from a machine learning perspective?</p>
                <h2>Finding a Loss Function</h2>
                <p>To get the ball rolling, say we start off with a pair of random values for our parameters a and b and we observe the resulting line to look something like this.</p>
                <img src={LinReg1} alt="LinReg0"></img>
                <p>Well just from looking at it we can tell that this line probably isn’t optimal, but can we measure just how bad (or good) it is?</p>
                <p>One common method of measuring the fit of a line to a set of points is to find the average of the squared difference in the predicted value of the function at a point <Latex>$f(x_m)$</Latex> and the actual value <Latex>$y_m$</Latex>.</p>
                <p>This method, (partially) illustrated below, gives us a result known as the mean squared error or MSE.  </p>
                <img src={LinReg2} alt="LinReg0"></img>
                <p>The red dashed lines above represent the differences in the predicted values, given by our orange line, and the actual values.  </p>
                <p>When we add all these differences up, square them, and divide by the total number of points we get the MSE.</p>
                <p>If we wanted to express this process mathematically we could do so with the following equation: </p>
                <img src={LinReg3} alt="LinReg0" style={{width: "20vw", margin: "auto"}}></img>
                <p>This equation is known as the <i>loss function</i> for our model; it simply measures the performance of the model.</p>
                <h2>Optimization</h2>
                <p>So how can we find a better model?</p>
                <p>Our MSE function belongs to a larger set of functions known as loss functions.  Loss functions represent the “cost” associated with a particular set of model parameters (ie. our a and b values). </p>
                <p>Our goal then becomes to minimize the loss (in this case the MSE) by tweaking our values of a and b until we reach an acceptable value.</p>
                <p>So, substituting <Latex>$f(x_m)=ax_m+b$,</Latex> we can expand out our loss function to get the following:</p>
                <img src={LinReg4} alt="LinReg0" style={{width: "20vw", margin: "auto"}}></img>
            
            
            
            </div>
            <div className="Bottom"></div>
        </div>
    );
}

export default LinearRegression