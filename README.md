# react-scrollsnap
A react component which snaps to the top or bottom.

>Warning: this is not production ready yet!

## example usage / intended use:
```js
import React from 'react';

import { ScrollSnapTop } from 'react-scrollsnap'

export default class TestPage extends React.Component {
  style = {
    height: "1000px",
    borderType: "solid"
  }

  render() {
    return (
      <ScrollSnapTop className='test' snappingOffset={15}>
        <div className="container">
          <div style={this.style}>Test!</div>
          <div>Test2</div>
        </div>
      </ScrollSnapTop>
    )
  }
}
```

## feature progress
* [X] <ScrollSnapTop/>
* [ ] <ScrollSnapBottom/>
* [ ] make import more granular
* [ ] remove jQuery dependency
