import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Triadic from './components/Triadic'
import Tints from './components/Tints';
import Shades from './components/Shades'

let color = "#24AF5E";

ReactDOM.render(
  <div style={{display: "flex", flexDirection: "column", margin: "3em"}}>
    <h1>Selected Color</h1>
    <div style={{backgroundColor: color, width: "50vw", height: "25vh", borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <p style={{fontWeight: "bold"}}>{color}</p>
    </div>
    <h1>Triadic</h1>
    <Triadic />
    <h1>Tints</h1>
    <Tints />
    <h1>Shades</h1>
    <Shades />
  </div>,
  document.getElementById('root')
);