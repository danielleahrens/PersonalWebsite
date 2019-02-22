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
            <ul>
              <li>
                <a
                  className="App-link"
                  href="https://danielleahrens.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Home <br /> <br />
                </a>
              </li>
              <li>
                <a
                  className="App-link"
                  href="https://danielleahrens.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Home2 <br /> <br />
                </a>
              </li>
              <li>
                <a
                  className="App-link"
                  href="https://danielleahrens.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Home3 <br /> <br />
                </a>
              </li>
            </ul>
            <img src={logo} className="App-logo" alt="logo" />

          </header>
      </div>
    );
  }
}

export default App;
