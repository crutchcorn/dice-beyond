import React from 'react';
import './App.css';
import {ColorPicker} from "./ColorPicker";

function App(props) {
  const [backgroundHex, setBGHex] = React.useState('#FFFFFF');

  React.useEffect(() => {
    chrome.storage.sync.set({backgroundHex}, function() {
      console.log('Value is set to ' + backgroundHex);
    });
  }, [backgroundHex]);

  return (
    <div className="App">
      <input onChange={e => setBGHex(e.target.value)} value={backgroundHex}/>
      <ColorPicker onChange={val => setBGHex(val.hex)} color={backgroundHex}/>
    </div>
  );
}

export default App;
