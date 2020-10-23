import React from 'react';
import './App.css';
import {TabContents} from "./components/TabContents";

function App() {
  const [backgroundHex, setBGHex] = React.useState('#000001');

  React.useEffect(() => {
    chrome.storage.sync.set({backgroundHex}, function() {
      console.log('Value is set to ' + backgroundHex);
    });
  }, [backgroundHex]);

  return (
    <div className="App">
        <TabContents color={backgroundHex} setColor={setBGHex} />
    </div>
  );
}

export default App;
