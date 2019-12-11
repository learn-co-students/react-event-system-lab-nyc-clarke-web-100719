import React from 'react';
import ReactDOM from 'react-dom';

import Keypad from './components/Keypad';
import EyesOnMe from './components/EyesOnMe';

ReactDOM.render(
  // console.log(props);
  
  <div>
    <Keypad />
    <EyesOnMe />
  </div>,
  document.getElementById('global')
);
