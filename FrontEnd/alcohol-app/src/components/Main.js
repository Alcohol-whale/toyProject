import React from 'react';
import Mainheader from './Mainheader';
import Footer from './Footer';
import '../assets/Main.css';

function Main(props) {

    return (
        <div class="main">
            <Mainheader/>
            <div class="content">
                <h1>test</h1>
            </div>
            <Footer/>
        </div>
    );
}

export default Main;