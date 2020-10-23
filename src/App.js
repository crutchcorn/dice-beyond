import React from 'react';
import './App.css';
import {TabContents} from "./components/TabContents";

function App() {
    const [backgroundHex, setBGHex] = React.useState('#000001');
    const [textHex, setTextHex] = React.useState('#000001');
    const [rollHex, setRollHex] = React.useState('#000001');

    React.useEffect(() => {
        chrome.storage.sync.set({backgroundHex}, function () {
            console.log('Value is set to ' + backgroundHex);
        });
    }, [backgroundHex]);

    const diceRef = React.useRef();
    const textRef = React.useRef();
    const rollRef = React.useRef();

    const tabs = [diceRef, textRef, rollRef];

    const [tabFocus, setTabFocus] = React.useState(0);

    const tabListKeyDown = React.useCallback(e => {
        // Move right
        if (e.keyCode === 39 || e.keyCode === 37) {
            tabs[tabFocus].current.setAttribute("tabindex", -1);
            if (e.keyCode === 39) {
                const newTabFocus = tabFocus + 1;
                // If we're at the end, go to the start
                if (newTabFocus >= tabs.length) {
                    setTabFocus(0);
                } else {
                    setTabFocus(newTabFocus)
                }
                // Move left
            } else if (e.keyCode === 37) {
                const newTabFocus = tabFocus + 1;
                // If we're at the start, move to the end
                if (newTabFocus < 0) {
                    setTabFocus(tabs.length - 1);
                } else {
                    setTabFocus(newTabFocus);
                }
            }

            tabs[tabFocus].current.setAttribute("tabindex", 0);
            tabs[tabFocus].current.focus();
        }
    }, [tabFocus]);

    return (
        <div className="tabs">
            <div onKeyDown={tabListKeyDown} role="tablist" aria-label="Sample Tabs">
                <button ref={diceRef} onClick={() => setTabFocus(0)} role="tab" aria-selected={tabFocus === 0} aria-controls="dice-panel" id="tab-dice" tabIndex="0">
                    Dice
                </button>
                <button ref={textRef} onClick={() => setTabFocus(1)} role="tab" aria-selected={tabFocus === 1} aria-controls="text-panel" id="tab-text" tabIndex="-1">
                    Text
                </button>
                <button ref={rollRef} onClick={() => setTabFocus(2)} role="tab" aria-selected={tabFocus === 2} aria-controls="roll-panel" id="tab-roll" tabIndex="-1">
                    Roll
                </button>
            </div>
            <div id="dice-panel" role="tabpanel" tabIndex="0" hidden={tabFocus !== 0} aria-labelledby="tab-dice">
                <h1>Dice</h1>
                <TabContents color={backgroundHex} setColor={setBGHex}/>
            </div>
            <div id="text-panel" role="tabpanel" tabIndex="0" hidden={tabFocus !== 1} aria-labelledby="tab-text">
                <h1>Text</h1>
                <TabContents color={textHex} setColor={setTextHex}/>
            </div>
            <div id="roll-panel" role="tabpanel" tabIndex="0" hidden={tabFocus !== 2} aria-labelledby="tab-roll">
                <h1>Roll</h1>
                <TabContents color={rollHex} setColor={setRollHex}/>
            </div>
        </div>
    );
}

export default App;
