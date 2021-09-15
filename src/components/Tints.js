import React from 'react';
import Color from './Color';

let colors = ["#24AF5E", "#3FB972", "#5BC386", "#76CD9A", "#92D7AF", "#ADE1C3", "#C8EBD7", "#E4F5EB"]

class Tints extends React.Component {
  render() {
    return <div style={{display: "flex", gap: "2em"}}>
      {colors.map(el => <Color bg={el} />)}
    </div>;
  }
}

export default Tints;