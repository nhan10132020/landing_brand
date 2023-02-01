import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import Platform from './components/Platforms/Platform';
import Pricing from './components/Pricing/Pricing';
import Support from './components/Support/Support';
function App() {
  return (
    <div className="App">
        <NavBar/>
        <Hero/>
        <About/>
        <Support/>
        <Platform/>
        <Pricing/>
        <Footer/>
    </div>
  );
}

export default App;
