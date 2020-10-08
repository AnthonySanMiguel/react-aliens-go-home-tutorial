import React from 'react';
import { skyAndGroundWidth } from '../utils/constants';

const Ground = () => {

    const groundStyle = {
        fill: '#59a941',
    };

    const division = {
        stroke: '#458232',
        strokeWidth: '3px',
    };

    const groundWidth = 5000;

    return (
        <g id="ground">
            {/* Rectangle element */}
            <rect
                id="ground-2"
                data-name="ground"
                style={groundStyle}
                x={groundWidth / -2}
                y={0}
                width={skyAndGroundWidth}
                height={100}
            />

            {/* Line element */}
            <line
                    x1={skyAndGroundWidth / -2}
                    y1={0}
                    x2={skyAndGroundWidth / -2}
                    y2={0}
                    style={division}
            />
        </g>
    );
};

export default Ground;
