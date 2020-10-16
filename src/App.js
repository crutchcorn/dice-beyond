import React from 'react';
import './App.css';

function App() {
  const [backgroundHex, setBGHex] = React.useState('#FFFFFF');

  React.useEffect(() => {
    chrome.storage.sync.set({backgroundHex}, function() {
      console.log('Value is set to ' + backgroundHex);
    });
  }, [backgroundHex]);

  return (
    <div className="App">
      <input onChange={e => setBGHex(e.target.value)} value={backgroundHex}/>
    </div>
  );
}

export default App;
