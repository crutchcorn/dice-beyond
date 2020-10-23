import React from 'react';
import {ColorPicker} from "../ColorPicker";
import './TabContents.css';

/**
 * @param {string} color - The HEX of the color for that tab
 * @param setColor - The second arg of useState to set the color in hex
 */
export const TabContents = ({color, setColor}) => {
    return (
        <div className="tabContents_container">
            <div>
                <div className="tabContents_preview" style={{backgroundColor: color}}/>
                <div className="tabContents_input_container">
                    <input className="tabContents_input" onChange={e => setColor(e.target.value)} value={color}/>
                </div>
            </div>
            <div className="tabContents_picker">
            <ColorPicker onChange={val => setColor(val.hex)} color={color}/>
            </div>
        </div>
    )
}
