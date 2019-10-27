import React, { Component } from 'react';
import FontSizeChanger from 'react-font-size-changer';

class Text extends Component {
  render() {
    return (
        <div>
          <FontSizeChanger
  targets={['#main .body']}
  customButtons={{
    up: <div>+</div>,
    down: <div>-</div>,
    style: {
      backgroundColor: 'black',
      color: 'white',
      WebkitBoxSizing: 'border-box',
      WebkitBorderRadius: '5px',
      width: '40px'
    },
    buttonsMargin: 10
  }}
/>
<div id="main" className="App">
  <p className="title">Lorem ipsum dolor</p>
  <p className="body">The quick brown fox jumps over the lazy dog</p>
</div>
        </div>
    );
  }
}

export default Text;