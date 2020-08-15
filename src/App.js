import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <Intro />
    </div>
  );
}

class Header extends Component{
  render(){
    return(
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <b>This is the first React.js App built by: <br/> <br/>MOTASIM</b>
          </p>
        </header>
      </div>
    );
  }
}

class Intro extends Component{
  render(){
    return(
      <div>
        <p className="App-intro">
          | Lets Get Started. |
        </p>
      </div>
    );
  }
}

export default App;
