import React from 'react';
import {CustomPicker} from "react-color";
import {Hue, Lightness, Saturation} from "./react-colors-extension/common";

export const ColorPicker = CustomPicker(props => {
    return (
        <>
            <div style={{height: '1.25rem', margin: '0.25rem', position: 'relative'}}>
            <Hue {...props} />
            </div>

            <div style={{height: '1.25rem', margin: '0.25rem', position: 'relative'}}>

                <Saturation {...props}/>
            </div>
            <div style={{height: '1.25rem', margin: '0.25rem', position: 'relative'}}>

            <Lightness {...props}/>
            </div>
        </>
    )
});
