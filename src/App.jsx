import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Differentials from './components/Differentials/Differentials';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
/* import Contact from './components/Contact/Contact';
 */import Footer from './components/Footer/Footer'; 
import './styles/global.css';

export default function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About/>
      <Differentials />
      <Services />
      <Footer /> 

      {/*<Contact />*/}
    </>
  );
}
