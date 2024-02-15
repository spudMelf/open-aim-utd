import React from 'react';

import { Link } from "react-router-dom";
import './home.css'

// import components
import Navbar from './Components/navbar';

function Home() {
    return (
        <div className="Home">
            <Navbar></Navbar>
            <h1>Home</h1>
        </div>

    )
}

export default Home;