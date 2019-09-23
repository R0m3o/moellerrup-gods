import React, { useState } from 'react';
import KobHampProdukter from '../../../assets/images/kob.hampprodukter.png';
import VerdensballetIAar from '../../../assets/images/verdensballet.2019.png';
import HistorieMollerup from '../../../assets/images/historie.mollerup.png';

const Nyhed = () => {
    const [nyheder, setNyheder] = useState([
        {image: KobHampProdukter, alt: 'fødevare produkter med indhold af hamp', title: 'Køb vores hampeprodukter', text: 'På Møllerup Gods arbejder vi med hamp og hampens unikke ernæringsmæssige egenskaber. Alt vores hamp er dyrket i Danmark, og resultatet er en række gode produkter, som kan købe her på webshoppen.', id: 1},
        {image: VerdensballetIAar, alt: 'to ballet dansere midt dans', title: 'Verdensballetten 2019', text: 'Siden 2012 har de klassiske gule mure på Møllerup Gods dannet rammen for Verdensballetten, og med mange tusinde gæster gennem årene er begivenheden efterhånden blevet en fasttømret og populær sommertradition på Djursland. Også til sommer 2019 vil vi få fornøjelsen af forestillingen på Møllerup Gods.', id: 2},
        {image: HistorieMollerup, alt: 'møllerrup gods set fra afstand', title: 'Historien om Møllerup Gods', text: 'Marsk Stig Andersen Hvide af den magtfulde Hvide-slægt er den tidligst kendte ejer af Møllerup. Møllerup var hans vigtigste besiddelse. Gården lå, som i dag, med en borg på øen og avlsbygninger på den anden side af voldgraven.', id: 3},
    ]);

    return (
        <div className="row">
            {nyheder.map(nyhed => {
                return (
                    <article key={ nyhed.id } className="col-md-4 text-justify">
                        <img src={ nyhed.image } alt={ nyhed.alt }/>
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
