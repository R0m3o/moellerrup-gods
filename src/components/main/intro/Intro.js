import React, { useState } from 'react';
import HampMark from '../../../assets/images/hampmark.jpg';
import Borgen from '../../../assets/images/mollerup.bogen.png';
import VerdensBallet from '../../../assets/images/verdensballetten.jpg';

const Intro = () => {
    const [slides, setSlides] = useState([
        {image: HampMark, alt: 'hamp mark', class: 'carousel-item active', id: 1},
        {image: Borgen, alt: 'møllerup borg', class: 'carousel-item', id: 2},
        {image: VerdensBallet, alt: 'verdensballet', class: 'carousel-item', id: 3}
    ]);
    
    return (
        <section>
            <div className="carousel slide" data-ride="carousel" id="intro">
                <ul className="carousel-indicators">
                    <li data-target="#intro" data-slide-to="0" className="active"></li>
                    <li data-target="#intro" data-slide-to="1"></li>
                    <li data-target="#intro" data-slide-to="2"></li>
                </ul>

                <div className="carousel-inner">
                    {slides.map(slide => {
                        return (
                            <div className={ slide.class } key={ slide.id }>
                                <img src={ slide.image } alt={ slide.alt } width="1100" height="500"/>
                            </div>
                        )
                    })}
                </div>

                <a href="#intro" className="carousel-control-prev" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a href="#intro" className="carousel-control-next" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>
        </section>
    )
}

export default Intro;
