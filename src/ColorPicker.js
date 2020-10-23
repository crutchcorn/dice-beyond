import React from 'react';
import {CustomPicker} from "react-color";
import {Hue, Lightness, Saturation} from "./react-colors-extension/common";
import './ColorPicker.css';

export const ColorPicker = CustomPicker(props => {
    return (
        <>
            <div className="selectorContainer">
                <p className="bodyText selectorText">H</p>
                <div className="selectorBars">
                    <Hue {...props} />
                </div>
            </div>
            <div className="selectorContainer">
                <p className="bodyText selectorText">S</p>
                <div className="selectorBars">
                    <Saturation {...props}/>
                </div>
            </div>
            <div className="selectorContainer">
                <p className="bodyText selectorText">L</p>
                <div className="selectorBars">
                    <Lightness {...props}/>
                </div>
            </div>

        </>
    )
});
