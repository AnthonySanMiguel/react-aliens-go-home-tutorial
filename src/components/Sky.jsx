import React from 'react';

const Sky = () => {
    const skyStyle = {
        fill: '#30abef',
    };
    const skyWidth = 5000; // Width is not actually important, as long as it is a number high enough to cover any screen size
    const gameHeight = 1200; //
    return (
        <rect
            style={skyStyle}
            x={skyWidth / -2}
            y={100 - gameHeight}
            width={skyWidth}
            height={gameHeight}
            />
    );
};

export default Sky;
