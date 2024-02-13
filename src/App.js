import logo from './logo.svg';
import './App.css';

function micontainer(){
 return(
  <h2>Hello</h2>  
 );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      {micontainer}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Well well well
        </a>
      </header>
    </div>
  );
}

export default App;
