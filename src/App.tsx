import './App.css'
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';
import Certifications from './components/Certifications/Certifications';
import Footer from './components/Footer/Footer';

import './index.css';
import './components/NavBar/NavBar.css';

function App() {

  return (
    <>
    <div className='main'>
      <img className="texture" src="./src/assets/Noise.png'" alt="Textura" />,
      <img className="texture" src="../src/assets/texture.png" alt="noiseTexture" />,
      <NavBar />,
      <Banner />,
      <About />,
      <Skills />,
      <Works/>,
      <Certifications/>,
      <Footer/>
    </div>
    </>
  )
}

export default App
