import React from 'react';
import {CustomPicker} from "react-color";
import {Hue} from "react-color/lib/components/common";
import {Lightness, Saturation} from "./react-colors-extension/common";

export const ColorPicker = CustomPicker(props => {
    return (
        <>
            <div style={{height: '10px', position: 'relative'}}>
            <Hue {...props} />
            </div>

            <div style={{height: '10px', position: 'relative'}}>

                <Saturation {...props}/>
            </div>
            <div style={{height: '10px', position: 'relative'}}>

            <Lightness {...props}/>
            </div>
        </>
    )
});
