// import logo from './logo.svg';
import './App.css';
import Intro from './components/IntroFolder/Intro.js';
import About from './components/About/About';
import ProjectList from './components/ProjectList/ProjectList';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div>
        <Intro></Intro>
        <About></About>
        <ProjectList></ProjectList>
        <Contact></Contact>
    </div>
  );
}

export default App;
