import './App.css';
import NavBar from './components/NavBar/NavBar';
import Welcome from './components/Welcome/Welcome';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Welcome />
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default App;
