import Avatar from './Avatar.svg';
import './App.css';
import { ReactTyped } from "react-typed";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Avatar} className="Avatar-logo" alt="Avatar" />
        <p className='texts'>
          <strong> {""}
            <ReactTyped strings={["Hello world, I am <span class='text-blue'>Jeanine Le</span>"]} typeSpeed={80} />
            </strong> 
          <p className='subheading'>Full Stack Developer</p>
        </p>
      </header>
    </div>
  );
}

export default App;
