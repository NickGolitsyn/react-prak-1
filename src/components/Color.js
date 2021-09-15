import React from 'react';

class Color extends React.Component {
  render() {
    return <div style={{backgroundColor: this.props.bg, width: "20%", height: "25vh", borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <p style={{fontWeight: "bold"}}>{this.props.bg}</p>
    </div>
  }
}

export default Color;