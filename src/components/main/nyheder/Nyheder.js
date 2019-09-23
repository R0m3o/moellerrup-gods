import React from 'react';
import Nyhed from './Nyhed';
import VerdensballetSucces from '../../../assets/images/verdensballet.succes.jpg';

const Nyheder = () => {
    return (
        <section>
            <img src={VerdensballetSucces} alt="arrangement verdensballeten" className="img-fluid"/>
            <h3>Verdensballetten på Møllerup Gods lørdag d. 12. juli 2019 blev en skøn aften</h3>
            <p>Verdensballetten planlægger at komme igen næste år lørdag d. 11. juli 2020</p>
            <a href="#">Læs mere</a>
            <Nyhed/>
        </section>
    )
}

export default Nyheder;
