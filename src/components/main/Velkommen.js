import React from 'react';
import Intro from './intro/Intro.js';
import Nyheder from './nyheder/Nyheder';
import Aktiviteter from './aktiviteter/Aktiviteter';
import Outro from './outro/Outro';

const Main = () => {
    return (
        <main className="container">
            <Intro/>
            <Nyheder/>
            <Aktiviteter/>
            <Outro/>
        </main>
    )
}

export default Main;
