import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

import "./App.css";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Stats from "./components/Stats";
import Products from "./components/Products";
import PortableWifi from "./components/PortableWifi";
import PortableMore from "./components/PortableMore";
import Esim from "./components/Esim";
import EsimMore from "./components/EsimMore";
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';




function App() {
  return (
    <div className="App ">
      <Hero />
      <Fade>
        <Feature />
      </Fade>
      <Fade>
        <Stats />
      </Fade>
      <Bounce bottom>
        <Products />
      </Bounce>
      <Bounce left> 
        <PortableWifi />
        <PortableMore/>
      </Bounce>
      <Bounce right>
        <Esim />
        <EsimMore />
      </Bounce>
      <Bounce bottom>
      <ContactUs />
      </Bounce>
      <Footer />
    </div>
  );
}

export default App;
