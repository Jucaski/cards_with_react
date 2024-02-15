import logo from './logo.svg';
import './App.css';

function micontainer(){
  var heelo = <h2>Hello</h2> 
 return (
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2>Muhco gusta</h2>
      </div>
    </div>
  </div>
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
      {micontainer()}
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
