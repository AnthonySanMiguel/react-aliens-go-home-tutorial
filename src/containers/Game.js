// This container will use the connect utility from react-redux...
import {connect} from 'react-redux';
import App from '../App';

//  ...to pass the state.message to the message props...
const mapStateToProps = state => ({
    message: state.message,
});

//  ...of the App component.
const Game = connect(
    mapStateToProps,
)(App);

export default Game;
