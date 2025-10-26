import './App.css';

import Navbar from './Navigation Section/navbar';
import Hero from './Description Section/Hero';
import Banner from './Work Section/Banner';
import Projects from './Projects Section/Projects';
import Tools from './Tools Section/Tools';
import Experience from './Experience Section/Experience';
import Certifications from './Certification Section/Certification';
import Contact from './Contact Section/Contact';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Tools/>
      <Banner/>
      <Projects/>
      <Experience/>
      <Certifications/>
      <Contact/>
    </div>
  );
}

export default App;
