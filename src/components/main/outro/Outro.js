import React from 'react';
import DKS from './DKS';
import Instagram from './Instagram';
import Nyhedsbrev from './Nyhedsbrev';

const Outro = () => {
    return (
        <section>
            <DKS/>
            <div className="row">
                <Instagram/>
                <Nyhedsbrev/>
            </div>
        </section>
    )
}

export default Outro;
