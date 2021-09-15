import React from 'react';
import Color from './Color';

let colors = ["#24AF5E", "#5E24AF", "#AF5E24"]

class Triadic extends React.Component {
  render() {
    return <div style={{display: "flex", gap: "2em"}}>
      {colors.map(el => <Color bg={el} />)}
    </div>;
  }
}

export default Triadic;