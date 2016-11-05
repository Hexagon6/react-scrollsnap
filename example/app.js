import React from 'react';

import ScrollSnapTop from '../lib/ScrollSnapTop.js';

export default class TestPage extends React.Component {
  render() {
    return (
      <ScrollSnapTop style={{ top: '60px'}} className='scrollsnaptop' snappingOffset={60}>
        <div className="container">
          <div style={{height: "1000px",
          borderType: "solid"}}>Test!</div>
          <div>Test2</div>
        </div>
      </ScrollSnapTop>
    )
  }
}
