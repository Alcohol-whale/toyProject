import React from 'react';
import Mainheader from './Mainheader';
import '../assets/Main.css';

function Main(props) {

    return (
        <div class="main">
            <Mainheader props='ilkwon' />
            <div class="content">
                <h1>test</h1>
            </div>
        </div>
    );
}

export default Main;