import React from 'react';
import ReactDOM from 'react-dom';
import {MainHeading} from '../public/views/main-heading.js';
import {About} from '../public/views/about.js';
import {Skills} from '../public/views/skills.js';
import './index.scss';

const Landing = () => {
    return (
        <div id="landing">
            <MainHeading />
            <About />
            <Skills />
        </div>
    )
}

ReactDOM.render(<Landing /> , document.getElementById('index'));