import React from 'react';
import Intro from './intro/Intro.js';
import Nyheder from './nyheder/Nyheder';
import Aktiviteter from './aktiviteter/Aktiviteter';
import Outro from './outro/Outro';

const Main = () => {
    return (
        <div>
            <p>main</p>
            <Intro/>
            <Nyheder/>
            <Aktiviteter/>
            <Outro/>
        </div>
    )
}

export default Main;
