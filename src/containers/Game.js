// This container will use the connect utility from react-redux...
import { connect } from 'react-redux';
import App from '../App';
import { moveObjects, startGame, shoot } from '../actions/index';

//  ...to pass the state.message to the message props...
const mapStateToProps = state => ({
    angle: state.angle,
    gameState: state.gameState,
});

const mapDispatchToProps = dispatch => ({
    moveObjects: (mousePosition) => {
        dispatch(moveObjects(mousePosition));
    },
    startGame: () => {
        dispatch(startGame());
    },
    shoot: (mousePosition) => {
        dispatch(shoot(mousePosition))
    },
});

//  ...of the App component.
const Game = connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);

export default Game;
