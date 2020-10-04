import React from 'react';
import PropTypes from 'prop-types';

const CannonBall = (props) => {
    const ballStyle = {
        fill: '#777777',
        stroke: '#444444',
        strokeWidth: '2px',
    };

    return (
        <ellipse
            style={ballStyle}
            cx={props.position.x}
            cy={props.position.y}
            rx="16"
            ry="16"
        />
    );
};

CannonBall.propTypes = {
    // Creates cannonball shape using x and y coordinates for placement on the canvas
    position: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
    }).isRequired,
};

export default CannonBall;
