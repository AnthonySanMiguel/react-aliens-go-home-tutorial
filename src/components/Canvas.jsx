import React from 'react';
import PropTypes from 'prop-types';
import Sky from './Sky';
import Ground from './Ground';
import CannonBase from "./CannonBase";
import CannonPipe from "./CannonPipe";
import CurrentScore from "./CurrenScore";
import FlyingObject from "./FlyingObject";
import StartGame from "./StartGame";
import Title from "./Title";

const Canvas = (props) => {
    // Use the 1200 value so your app can properly show the new title component.
    // This new vertical space will give enough time for your users to see and kill these flying objects.
    const gameHeight = 1200;
    // Defines viewBox attribute of Canvas svg element.
    const viewBox =
            [window.innerWidth / -2, // min-x: This value defines what is the leftmost point that your users will see. You need to use -2 to make your canvas show the same amount of points to the left (negative) and to the right (positive) of the origin.
            100 - gameHeight, // min-y: This value defines what will be the uppermost point of your canvas.
            window.innerWidth, // width
            gameHeight]; // height
    return (
        <svg
            id="aliens-go-home-canvas"
            preserveAspectRatio="xMaxYMax none" // Forces uniform scaling of the canvas and its elements.
            // Event listener added to your canvas to make your App component aware of the mouse position.
            onMouseMove={props.trackMouse}
            viewBox={viewBox}
        >
            <defs>
                <filter id="shadow">
                    <feDropShadow dx="1" dy="1" stdDeviation="2" />
                </filter>
            </defs>
            {/* SVG relies on the order that the elements are listed to decide which one is above the other.
            You have to define the circle element after the Sky so web browsers know that they must show it above the blue background. */}
            <Sky />
            <Ground />
            {/* Cannon rotation is tied to the state provided by the Redux store (through your App mappings) */}
            <CannonPipe rotation={props.angle} />
            <CannonBase />
            <CurrentScore score={15} />

            { ! props.gameState.started &&
            <g>
                <StartGame onClick={() => props.startGame()} />
                <Title />
            </g>
            }

            {props.gameState.flyingObjects.map(flyingObject => (
                <FlyingObject
                    key={flyingObject.id}
                    position={flyingObject.position}
                />
            ))}
        </svg>
    );
};

Canvas.propTypes = {
    angle: PropTypes.number.isRequired,
    gameState: PropTypes.shape({
        started: PropTypes.bool.isRequired,
        kills: PropTypes.number.isRequired,
        lives: PropTypes.number.isRequired,
    }).isRequired,
    trackMouse: PropTypes.func.isRequired,
    startGame: PropTypes.func.isRequired,
};

export default Canvas;
