import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Velkommen from './components/main/Velkommen';
import PageJagt from './components/subpages/velkommen/PageJagt';
import PageHestepension from './components/subpages/velkommen/PageHestpension';
import PageLejKontor from './components/subpages/velkommen/PageLejKontor';
import PageLejBolig from './components/subpages/velkommen/PageLejBolig';
import PageMollerupBogen from './components/subpages/velkommen/PageMollerupBogen';
import PageHampefroTilUdsaed from './components/subpages/velkommen/PageHampefroTilUdsaed';
import PageVerdensballetten from './components/subpages/PageVerdensballetten';
import PageVerdensballettenErhverv from './components/subpages/verdensballetten/PageVerdensballettenErhverv';
import PageSamarbejdspartnere from './components/subpages/verdensballetten/PageSamarbejdspartnere';
import PageGladeGaester from './components/subpages/verdensballetten/PageGladeGaester';
import PageGourmetoplevelser from './components/subpages/verdensballetten/PageGourmetoplevelser';
import PagePraktiskInfo from './components/subpages/verdensballetten/PagePraktiskInfo';
import PageBlivFrivilig from './components/subpages/verdensballetten/PageBlivFrivilig';
import PageNyheder from './components/subpages/PageNyheder';
import PageEventsOgModefaciliteter from './components/subpages/PageEventsOgModefaciliteter';
import PageFerie from './components/subpages/events-og-modefaciliteter/PageFerie';
import PageFestPaaMollerupGods from './components/subpages/events-og-modefaciliteter/PageFestPaaMollerupGods';
import PageFestPaaHubertusKroen from './components/subpages/events-og-modefaciliteter/fest-paa-mollerup-gods/PageFestPaaHubertusKroen';
import PageFestIKoreladen from './components/subpages/events-og-modefaciliteter/fest-paa-mollerup-gods/PageFestIKoreladen';
import PageModer from './components/subpages/events-og-modefaciliteter/PageModer';
import PageOplevelser from './components/subpages/events-og-modefaciliteter/PageOplevelser';
import PageRundvisninger from './components/subpages/events-og-modefaciliteter/PageRundvisninger';
import PageHvadSigerVoresGaester from './components/subpages/PageHvadSigerVoresGaester';
import PageOmMollerupGods from './components/subpages/PageOmMollerupGods';
import PageHeleHistorien from './components/subpages/om-mollerup-gods/PageHeleHistorien';
import PageGalleri from './components/subpages/om-mollerup-gods/PageGalleri';
import PageVirksomhederPaaMollerup from './components/subpages/om-mollerup-gods/PageVirksomhederPaaMollerup';
import PageKontaktOs from './components/subpages/PageKontaktOs';
import PageWebshop from './components/subpages/PageWebshop';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header/>
        <div>
          <Route exact path='/' component={Velkommen}/>
          <Route path='/jagt' component={PageJagt}/>
          <Route path='/hestepension' component={PageHestepension}/>
          <Route path='/lej_kontor' component={PageLejKontor}/>
          <Route path='/lej_bolig' component={PageLejBolig}/>
          <Route path='/møllerup_bogen' component={PageMollerupBogen}/>
          <Route path='/hampefrø_til_udsæd' component={PageHampefroTilUdsaed}/>
          <Route path='/verdensballetten' component={PageVerdensballetten}/>
          <Route path='/verdensballetten_erhverv' component={PageVerdensballettenErhverv}/>
          <Route path='/samarbejdspartnere' component={PageSamarbejdspartnere}/>
          <Route path='/glade_gæster' component={PageGladeGaester}/>
          <Route path='/gourmetoplevelser' component={PageGourmetoplevelser}/>
          <Route path='/praktisk_info' component={PagePraktiskInfo}/>
          <Route path='/bliv_frivilig' component={PageBlivFrivilig}/>
          <Route path='/nyheder' component={PageNyheder}/>
          <Route path='/events_og_mødefaciliteter' component={PageEventsOgModefaciliteter}/>
          <Route path='/ferie' component={PageFerie}/>
          <Route path='/fest_på_møllerup_gods' component={PageFestPaaMollerupGods}/>
          <Route path='/fest_på_hubertus_kroen' component={PageFestPaaHubertusKroen}/>
          <Route path='/fest_i_køreladen' component={PageFestIKoreladen}/>
          <Route path='/møder' component={PageModer}/>
          <Route path='/oplevelser' component={PageOplevelser}/>
          <Route path='/rundvisninger' component={PageRundvisninger}/>
          <Route path='/hvad_siger_vores_gæster' component={PageHvadSigerVoresGaester}/>
          <Route path='/om_møllerup_gods' component={PageOmMollerupGods}/>
          <Route path='/hele_historien' component={PageHeleHistorien}/>
          <Route path='/galleri' component={PageGalleri}/>
          <Route path='/virksomheder_på_møllerup' component={PageVirksomhederPaaMollerup}/>
          <Route path='/kontakt_os' component={PageKontaktOs}/>
          <Route path='/webshop' component={PageWebshop}/>
        </div>
        <Footer/>
      </BrowserRouter>
    )
  }
}

export default App;

