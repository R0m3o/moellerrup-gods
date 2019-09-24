import React, { useState } from 'react';
import KobHampProdukter from '../../../assets/images/kob.hampprodukter.png';
import VerdensballetIAar from '../../../assets/images/verdensballet.2019.png';
import HistorieMollerup from '../../../assets/images/historie.mollerup.png';
import VerdensballetSucces from '../../../assets/images/verdensballet.succes.jpg';

const Nyhed = () => {
    const [nyheder, setNyheder] = useState([
        {class: 'col-md-12', image: VerdensballetSucces, alt: 'arrangement verdensballeten', title: 'Verdensballetten på Møllerup Gods lørdag d. 12. juli 2019 blev en skøn aften', text: 'Verdensballetten planlægger at komme igen næste år lørdag d. 11. juli 2020', id: 1},
        {class: 'col-md-4 text-justify', image: KobHampProdukter, alt: 'fødevare produkter med indhold af hamp', title: 'Køb vores hampeprodukter', text: 'På Møllerup Gods arbejder vi med hamp og hampens unikke ernæringsmæssige egenskaber. Alt vores hamp er dyrket i Danmark, og resultatet er en række gode produkter, som kan købe her på webshoppen.', id: 2},
        {class: 'col-md-4 text-justify', image: VerdensballetIAar, alt: 'to ballet dansere midt dans', title: 'Verdensballetten 2019', text: 'Siden 2012 har de klassiske gule mure på Møllerup Gods dannet rammen for Verdensballetten, og med mange tusinde gæster gennem årene er begivenheden efterhånden blevet en fasttømret og populær sommertradition på Djursland. Også til sommer 2019 vil vi få fornøjelsen af forestillingen på Møllerup Gods.', id: 3},
        {class: 'col-md-4 text-justify', image: HistorieMollerup, alt: 'møllerrup gods set fra afstand', title: 'Historien om Møllerup Gods', text: 'Marsk Stig Andersen Hvide af den magtfulde Hvide-slægt er den tidligst kendte ejer af Møllerup. Møllerup var hans vigtigste besiddelse. Gården lå, som i dag, med en borg på øen og avlsbygninger på den anden side af voldgraven.', id: 4}
    ]);

    return (
        <div className="row">
            {nyheder.map(nyhed => {
                return (
                    <article key={ nyhed.id } className={ nyhed.class }>
                        <img src={ nyhed.image } alt={ nyhed.alt } className="img-fluid"/>
                        <h4>{ nyhed.title }</h4>
                        <p>{ nyhed.text }</p>
                        <a href="#">Læs mere</a>
                    </article>
                )
            })}
        </div>
    )
}

export default Nyhed;
