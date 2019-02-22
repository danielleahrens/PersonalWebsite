import React, { Component } from 'react';
import logo from './IMG_1745.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="App-header">
            <p>
              Danielle Ahrens
            </p>
                <a
                  className="App-link"
                  href="https://danielleahrens.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  home <br/> <br/>
                </a>
            <img src={logo} className="App-logo" alt="logo" />

          </header>
      </div>
    );
  }
}

export default App;
