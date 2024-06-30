import './App.css';
import Navbar from './components/NavBar/navbar';
import Header from './components/intro/header';
import About from './components/About/about'
import Projects from './components/myprojects/projects';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
