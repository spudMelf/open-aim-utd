import './vectors.css';
import Navbar from '../../Components/navbar'
import axes from '../../Assets/Axes.png';
import apple from '../../Assets/apple.png';
import orange from '../../Assets/orange.png';
import ball from '../../Assets/ball.png';
import whale from '../../Assets/whale.png';
import axesWithItems from '../../Assets/Axes with items.png'

import Content from '../../Components/content';
import Bottom from '../../Components/bottom';
import Folders from '../../Components/folders';

import { Link } from "react-router-dom";

var Latex = require('react-latex');

function Vectors() {
    //const vector = `\begin{bmatrix}1 \\ 5 \\ -4 \\ 0\end{bmatrix}`;
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
                <Link className="folder-link" to='/open-aim-utd/Topics/IntroMath/view' style={{textDecoration:'none',color:'black', display:'inline-block'}}>
                    <h1>Introductory Mathematics</h1>
                </Link>
            </span>
      </div>
      <div className="content">
        <h1>A Brief Introduction to Vectors</h1>
        <p>Vectors are at the heart of many data science and deep learning models and applications.  
          In this article, I hope to introduce you to vectors and their operations.
        </p>
        <h2>What are vectors?</h2>
        <p>If you’ve taken a physics class you’ve probably heard this definition of a vector before: 
          <i>“Vectors are objects that contain both magnitude and direction”</i>.  
          <br></br><br></br>This is certainly a useful way of thinking about vectors and their operations in many contexts, 
          however, we should expand upon that definition.  
        </p>
        <h2>Vectors In linear algebra</h2>
        <p>Let’s first think about what vectors are in the context of linear algebra.  
          No worries if you’ve never taken a course in linear algebra before, 
          these resources are here to give you the necessary foundation.
        </p>
        <p>Go ahead and watch this video:</p>
        <div className="video"></div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/fNk_zzaMoSs?si=a0nrquyHrg3mdTXV" 
          title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
        </iframe>
        <p>Hopefully that gave a different perspective on what vectors can be, 
          and if you were already familiar with linear algebra then hopefully it served as a useful refresher.
        </p>

        <h2>Vectors in machine learning</h2>
        <p>In the machine learning context, vectors form the basis of how information is used. 
          Information is stored, manipulated, and calculated with all in this vector form.
        </p>
        <p>Let’s illustrate with an example.</p>
        <img src={axes} alt="axes" className="image"></img>
        <p>
        Let’s say we are measuring a set of objects based on two {'(over-simplified)'} axes: redness and tastiness.  
        <br></br><br></br>Our ‘x’ axis represents how red the object is, with very red objects being on the left and not red objects being on the right.  
        <br></br><br></br>Similarly, tasty objects will be closer to the top and non-tasty objects will be closer to the bottom.
        </p>
        <p>
        What if I wanted to add some objects to our graph – say a red apple, an orange, a red kickball, and a blue whale– 
        what would the graph look like?
        </p>
        <div className="imageGrid">
          <div id="apple" className="imageInGrid">
            <img src={apple} alt="apple"></img>
          </div>
          <div id="orange" className="imageInGrid">
            <img src={orange} alt="apple"></img>
          </div>
          <div id="ball" className="imageInGrid">
            <img src={ball} alt="apple"></img>
          </div>
          <div id="whale" className="imageInGrid">
            <img src={whale} alt="apple"></img>
          </div>
        </div>

        <p>To figure this out we would have to think about where each one of those items belongs on each of our axes.</p>
        
        <p>For something like an apple, since it’s red and tasty, 
        it would probably belong close to the top and on the far left side of our chart: somewhere around (-3, 1).
        </p>
        
        <p>
        Now let’s think about the orange.  It’s somewhat red and tasty, 
        so it probably belongs close to the top and maybe a little bit more than halfway to red, so somewhere like (-0.5, 1).
        </p>
        <p>For our red kickball: it’s very red but it’s also not very tasty, so let’s put it at (-3, -1).  </p>
        <p>Lastly for our blue whale: it’s not red at all really but
         –according to Google– it is actually quite tasty so let’s put it somewhere around (3, 0.5)</p>

        <p>So our final graph would look something like this.</p>
        <img src={axesWithItems} alt="axes with items" className="image"></img>
        <p>We now have a graph that accurately sums up the defined relationships between these objects.</p>

        <p>Most importantly though, we now have a set of vectors, namely: [-3 1]; [-0.5, 1]; [-3, -1]; [3, 0.5] that has taken our initial set of complex real-world objects (compromised of images and our pre-existing knowledge of taste) and we have converted it into numbers that store the relationships between these objects, and that the computer can use.
</p>

        


        <p>Take a moment to just let this sink in: we took something that was actually quite complex (a real-world orange) and we were able to tell a computer how it relates to another object, like an apple, and the information is stored in a way that the computer can work with.  This is pretty amazing!
</p>

        <p>In the future we’ll learn about how we can represent text as vectors to measure similarity between the meaning of different words, how vectors and linear algebra can be used in optimization problems, and how vectors can be used to match faces in facial recognition software.  It all starts here!</p>
        <p>In the next article we’ll be looking at some additional vector operations and how we can measure the relationships between objects more rigorously.  
</p>
      </div>
      
        
    </div>
  );
}

export default Vectors;