import React from 'react';
import Color from './Color';

let colors = ["#24AF5E", "#209952", "#1B8347", "#176D3B", "#12572F", "#0E4223", "#092C18", "#05160C"]

class Shades extends React.Component {
  render() {
    return <div style={{display: "flex", gap: "2em"}}>
      {colors.map(el => <Color bg={el} />)}
    </div>;
  }
}

export default Shades;