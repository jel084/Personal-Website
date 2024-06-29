import './App.css';
import Navbar from './components/NavBar/navbar';
import Header from './components/intro/header';
import About from './components/About/about'

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
    </div>
  );
}

export default App;
