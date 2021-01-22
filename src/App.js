import React from 'react';
import me from './cloutsupreme.jpg';
import resume from './WigginsDevinResume_01_2021.pdf';
import AboutMe from "./AboutMe";
import Sidebar from "./Sidebar";
import './App.css';
import '@material-ui/core';

//if you're wondering how to deploy correctly to firebase
//npm run build
//firebase deploy



function App() {
  return (
      <div className="App">
          <header className="App-header">
              <img src={me} className="App-logo" alt="Me in all my glory"></img>
              <h3>Devin Wiggins</h3>
              <p>Software Developer</p>
              <p>
                  <a href={'https://www.linkedin.com/in/devin-wiggins/'}><p><ion-icon name="logo-linkedin"></ion-icon> LinkedIn</p></a>
                  <a href={'https://github.com/devinw5500/'}><p><ion-icon name="logo-github"></ion-icon> devinw5500</p></a>
                  <a href={`mailto:${'devinw5500@gmail.com'}`}><p><ion-icon name="mail-outline"></ion-icon> devinw5500@gmail.com</p></a>
                  <a href={`tel:${'412-613-4762'}`}><p><ion-icon name="call-outline"></ion-icon> 412-613-4762</p></a>
                  <a href={resume}><ion-icon name="document-text-outline"></ion-icon> Resume</a>
              </p>

          </header>
          <hr/>
          <body>
          <AboutMe id="AboutMe"></AboutMe>
          </body>
      </div>
  );
}

export default App;
