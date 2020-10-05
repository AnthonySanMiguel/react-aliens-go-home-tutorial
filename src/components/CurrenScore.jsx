import React from 'react';
import PropTypes from 'prop-types';

const CurrentScore = (props) => {
    const scoreStyle = {
        // Note: If you haven't configured Joti One (or if you configured some other font), you will have to change this code accordingly.
        // Besides, this font is used by other components, so keep in mind to update these components as well.
        fontFamily: '"Joti One", cursive',
        fontSize: 80,
        fill: '#d6d33e',
    };

    return (
        <g filter="url(#shadow)">
            <text style={scoreStyle} x="300" y="80">
                {props.score}
            </text>
        </g>
    );
};

CurrentScore.propTypes = {
    score: PropTypes.number.isRequired,
};

export default CurrentScore;
