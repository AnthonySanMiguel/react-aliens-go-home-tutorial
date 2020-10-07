import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { getCanvasPosition } from './utils/formulas';
import Canvas from './components/Canvas';

class App extends Component {
    // Defines the lifecycle method to start the uniform interval that will trigger the moveObjects action.
    componentDidMount() {
        const self = this;
        setInterval(() => {
            self.props.moveObjects(self.canvasMousePosition);
        }, 10);

// This will make your app keep the dimension of your canvas equal to the dimension of the window that your users see...even if they resize their browsers.
// It will also force the execution of the window.onresize function when the app is rendered for the first time.
        window.onresize = () => {
            const cnv = document.getElementById('aliens-go-home-canvas');
            cnv.style.width = `${window.innerWidth}px`;
            cnv.style.height = `${window.innerHeight}px`;
        };
        window.onresize();
    }
    // Method to update the canvasMousePosition property of the App component.
    // This property is used by the moveObjects action.
    // *Note: this property does not refer to the mouse position over the HTML document. It refers to a relative position inside your canvas.
    trackMouse(event) {
        this.canvasMousePosition = getCanvasPosition(event);
    }

    // This method now passes the angle property and the trackMouse method to the Canvas component.
    render() {
        return (
            <Canvas
                // The canvas component will use angle to update the way it renders your cannon...
                angle={this.props.angle}
                gameState={this.props.gameState}
                startGame={this.props.startGame}
                // ...and the trackMouse to attach as an event listener to the svg element.
                trackMouse={event => (this.trackMouse(event))}
            />
        );
    }
}

App.propTypes = {
    // Refers to the angle the cannon is aiming to.
    angle: PropTypes.number.isRequired,
    gameState: PropTypes.shape({
        started: PropTypes.bool.isRequired,
        kills: PropTypes.number.isRequired,
        lives: PropTypes.number.isRequired,
    }).isRequired,
    flyingObjects: PropTypes.arrayOf(PropTypes.shape({
        position: PropTypes.shape({
            x: PropTypes.number.isRequired,
            y: PropTypes.number.isRequired
        }).isRequired,
        id: PropTypes.number.isRequired,
    })).isRequired,
    // Function that is going to be triggered on a uniform interval to update your cannon.
    moveObjects: PropTypes.func.isRequired,
    startGame: PropTypes.func.isRequired,
};

export default App;
