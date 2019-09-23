import React, { useState } from 'react';
import Hampmark from '../../../assets/images/hampmark.jpg';
import ModerEvents from '../../../assets/images/moder.events.jpg';
import FestPaaKroen from '../../../assets/images/ferie.huberlus.jpg';
import Rundvisning from '../../../assets/images/rundvisning.jpg';
import HudplejeHamp from '../../../assets/images/hudpleje.hamp.jpg';
import FodevarerHamp from '../../../assets/images/fodevarer.hamp.jpg';
import MollerupBogen from '../../../assets/images/mollerup.bogen.png';
import MollerupJagt from '../../../assets/images/mollerup.jagt.jpg';
import FerieHuberlus from '../../../assets/images/ferie.huberlus.jpg';
import MollerupGodsbolig from '../../../assets/images/mollerup.godsbolig.jpg';
import Hestepension from '../../../assets/images/hestepension.jpg';
import Verdensballet from '../../../assets/images/verdensballetten.jpg';

const Aktivitet = () => {
    const [aktiviteter, setAktiviteter] = useState([
        {image: Hampmark, alt: 'gård-ejere på hamp-mark', title: 'Møllerup Hamp', text: 'På Møllerup dyrker vi industri-hamp til fødevarer, isolering og hudpleje.', id:1},
        {image: ModerEvents, alt: 'velplejet have', title: 'Møder og events', text: 'Hold møde eller firmaevent i smukke, autentiske rammer med plads til kreativitet.', id:2},
        {image: FestPaaKroen, alt: 'bord som er dækket op til fest', title: 'Fest på kroen', text: 'Lej Hubertus Kroen og hold fest for op til 80 pers. I romantiske og historiske rammer.', id:3},
        {image: Rundvisning, alt: 'stor forsamling af mennesker', title: 'Rundvisninger', text: 'Bestil en rundvisning på Møllerup. Lær noget om historien, jagten, og livet på Møllerup.', id:4},
        {image: HudplejeHamp, alt: 'hudpleje artikler med indhold af hamp', title: 'Hamp hudpleje', text: 'Prøv Møllerups nye husplejeserie baseret på de næringsrige olie på hampens frø.', id:5},
        {image: FodevarerHamp, alt: 'fødevare produkter med indhold af hamp', title: 'Hamp fødevarer', text: 'Prøv fødevarer udviklet på baggrund af frøerne fra den sunde hamp fra Møllerup.', id:6},
        {image: MollerupBogen, alt: 'mølerrup bogen', title: 'Møllerup bogen', text: 'Der er kød og blod på historien. Læs mere om Marsk Stig og livet på Møllerup.', id:7},
        {image: MollerupJagt, alt: 'jæger i vintertøj', title: 'Møllerup jagt', text: 'Professionel jagt i kuperel og varieret landskab med mange fasaner og råvildt.', id:8},
        {image: FerieHuberlus, alt: 'bygning med værelser til udlejning', title: 'Ferie for 40', text: 'Nyd en ferie eller weekend på Hubertus Kroen. Op til 40 personer inkl. pool.', id:9},
        {image: MollerupGodsbolig, alt: 'en bolig', title: 'Bolig på landet', text: 'Mærk roen og nyd det smukke landskab i et omsorgsfuldt lokalsamfund.', id:10},
        {image: Hestepension, alt: 'en gruppe heste og deres fører', title: 'Hestepension', text: 'Giv din hest et sundt ophold, god plads ude og inde i den gamle herskabsstald.', id:11},
        {image: Verdensballet, alt: 'strort ballet arrangement', title: 'Verdensballetten', text: 'Verdensballet – charmerende udendørsforestilling, 13 juli 2018 på Møllerup.', id:12}
    ]);

    return (
        <div className="row">
            {aktiviteter.map(aktivitet => {
                return (
                    <article key={ aktivitet.id } className="col-md-4">
                        <img src={ aktivitet.image } alt={ aktivitet.alt }/>
                        <h4>{ aktivitet.title }</h4>
                        <p>{ aktivitet.text }</p>
                        <a href="#">Læs mere her</a>
                    </article>
                )
            })}
        </div>
    )
}

export default Aktivitet;
