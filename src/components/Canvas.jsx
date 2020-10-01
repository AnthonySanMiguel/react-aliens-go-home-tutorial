import React from 'react';
import Sky from './Sky';

const Canvas = () => {
    // Defines viewBox attribute of Canvas svg element.
    const viewBox = [window.innerWidth / -2, // min-x: This value defines what is the leftmost point that your users will see. So, to make the origin axis (and the circle) appear in the center of the screen, you divided your screen width by negative two (window.innerWidth / -2) to the get this attribute (min-x). Note that you need to use -2 to make your canvas show the same amount of points to the left (negative) and to the right (positive) of the origin.
        100 - window.innerHeight, // min-y: This value defines what will be the uppermost point of your canvas. Here, you have subtracted the window.innerHeight from 100 to give some area (100 points) after the Y origin.
        window.innerWidth, // width
        window.innerHeight]; // height
    return (
        <svg
            id="aliens-go-home-canvas"
            preserveAspectRatio="xMaxYMax none" // Forces uniform scaling of the canvas and its elements.
            viewBox={viewBox}
        >
            <Sky />
            <circle cx={0} cy={0} r={50}/>
        </svg>
    );
};

export default Canvas;
