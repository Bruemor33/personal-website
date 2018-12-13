import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from '../public/views/home.js';
import './index.scss';

const Home = () => {
    return (
        <div>
            <Welcome />
        </div>
    )
}

ReactDOM.render(<Home />, document.getElementById('index'));

console.log("HELLO WORLD!");