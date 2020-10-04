// This container will use the connect utility from react-redux...
import { connect } from 'react-redux';
import App from '../App';
import { moveObjects } from '../actions/index';

//  ...to pass the state.message to the message props...
const mapStateToProps = state => ({
    angle: state.angle,
});

const mapDispatchToProps = dispatch => ({
    moveObjects: (mousePosition) => {
        dispatch(moveObjects(mousePosition));
    },
});

//  ...of the App component.
const Game = connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);

export default Game;
