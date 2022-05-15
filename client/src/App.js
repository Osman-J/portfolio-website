import './App.css';
import NavBar from './components/NavBar/NavBar';
import Welcome from './components/Welcome/Welcome';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Work from "./components/Work/Work";
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Welcome />
        <About />
        <Projects />
        <Work />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
