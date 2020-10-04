import React from 'react';
import PropTypes from 'prop-types';
import Sky from './Sky';
import Ground from './Ground';
import CannonBase from "./CannonBase";
import CannonPipe from "./CannonPipe";

const Canvas = (props) => {
    // Defines viewBox attribute of Canvas svg element.
    const viewBox = [window.innerWidth / -2, // min-x: This value defines what is the leftmost point that your users will see. So, to make the origin axis (and the circle) appear in the center of the screen, you divided your screen width by negative two (window.innerWidth / -2) to the get this attribute (min-x). Note that you need to use -2 to make your canvas show the same amount of points to the left (negative) and to the right (positive) of the origin.
        100 - window.innerHeight, // min-y: This value defines what will be the uppermost point of your canvas. Here, you have subtracted the window.innerHeight from 100 to give some area (100 points) after the Y origin.
        window.innerWidth, // width
        window.innerHeight]; // height
    return (
        <svg
            id="aliens-go-home-canvas"
            preserveAspectRatio="xMaxYMax none" // Forces uniform scaling of the canvas and its elements.
            // Event listener added to your canvas to make your App component aware of the mouse position.
            onMouseMove={props.trackMouse}
            viewBox={viewBox}
        >
            {/* SVG relies on the order that the elements are listed to decide which one is above the other.
            You have to define the circle element after the Sky so web browsers know that they must show it above the blue background. */}
            <Sky />
            <Ground />
            {/* Cannon rotation is tied to the state provided by the Redux store (through your App mappings) */}
            <CannonPipe rotation={props.angle} />
            <CannonBase />
        </svg>
    );
};

Canvas.propTypes = {
    // Explicitly state that both 'angle'...
    angle: PropTypes.number.isRequired,
    // ...and 'trackMouse' are required to run successfully
    trackMouse: PropTypes.func.isRequired,
};

export default Canvas;
