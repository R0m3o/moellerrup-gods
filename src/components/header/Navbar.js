import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ol className="navbar-nav">
                    <li className="nav-item">
                        <NavLink exact to="/" className="nav-link">Velkommen</NavLink>
                        <ul>
                            <li className="nav-item">
                                <NavLink to="/jagt" className="nav-link">Jagt</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/hestepension" className="nav-link">Hestepension</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/lej_kontor" className="nav-link">Lej kontor</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/lej_bolig" className="nav-link">Lej bolig</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/møllerup_bogen" className="nav-link">Møllerup bogen</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/hampefrø_til_udsæd" className="nav-link">Hampefrø til udsæd</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/verdensballetten" className="nav-link">Verdensballetten</NavLink>
                        <ul>
                            <li className="nav-item">
                                <NavLink to="/verdensballetten_erhverv" className="nav-link">Verdensballetten erhverv</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/samarbejdspartnere" className="nav-link">Samarbejdspartnere</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/glade_gæster" className="nav-link">Glade gæster</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/gourmetoplevelser" className="nav-link">Gourmetoplevelser</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/praktisk_info" className="nav-link">Praktisk info</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/bliv_frivilig" className="nav-link">Bliv frivillig</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/nyheder" className="nav-link">Nyheder</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/events_og_mødefaciliteter" className="nav-link">Events & mødefaciliteter</NavLink>
                        <ul>
                            <li className="nav-item">
                                <NavLink to="/ferie" className="nav-link">Ferie</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/fest_på_møllerup_gods" className="nav-link">Fest på Møllerup Gods</NavLink>
                                <ol>
                                    <li className="nav-item">
                                        <NavLink to="/fest_på_hubertus_kroen" className="nav-link">Fest på Hubertus kroen</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/fest_i_køreladen" className="nav-link">Fest i Køreladen</NavLink>
                                    </li>
                                </ol>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/møder" className="nav-link">Møder</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/oplevelser" className="nav-link">Oplevelser</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/rundvisninger" className="nav-link">Rundvisninger</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/hvad_siger_vores_gæster" className="nav-link">Hvad siger vores gæster</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/om_møllerup_gods" className="nav-link">Om Møllerup Gods</NavLink>
                        <ul>
                            <li className="nav-item">
                                <NavLink to="/hele_historien" className="nav-link">Hele historien</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/galleri" className="nav-link">Galleri</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/virksomheder_på_møllerup" className="nav-link">Virksomheder på Møllerup</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/kontakt_os" className="nav-link">Kontakt os</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/webshop" className="nav-link">Webshop</NavLink>
                    </li>
                </ol>
            </div>
        </nav>
    )
}

export default Navbar;