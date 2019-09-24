import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ol className="navbar-nav">
                    <li className="nav-item">
                        <a href="#" className="nav-link">Velkommen</a>
                        <ul>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Jagt</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Hestepension</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Lej kontor</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Lej bolig</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Møllerup bogen</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Hampefrø til udsæd</a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Verdensballetten</a>
                        <ul>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Verdensballetten erhverv</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Samarbejdspartnere</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Glade gæster</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Gourmetoplevelser</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Praktisk info</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Bliv frivillig</a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Nyheder</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Events & mødefaciliteter</a>
                        <ul>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Ferie</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Fest på Møllerup Gods</a>
                                <ol>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">Fest på Hubertus kroen</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">Fest i Køreladen</a>
                                    </li>
                                </ol>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Møder</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Oplevelser</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Rundvisninger</a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Hvad siger vores gæster</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Om Møllerup Gods</a>
                        <ul>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Hele historien</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Galleri</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Virksomheder på Møllerup</a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Kontakt os</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Webshop</a>
                    </li>
                </ol>
            </div>
        </nav>
    )
}

export default Navbar;