import {MOVE_OBJECTS, START_GAME, SHOOT} from "../actions";
import moveObjects from './moveObjects';
import StartGame from "../components/StartGame";
import shoot from './shoot';

const initialGameState = {
    // Indicates if the game is running or not.
    started: false,
    // Holds how many flying objects the user has killed.
    kills: 0,
    // Holds how many lives the user has.
    lives: 3,
    flyingObjects: [],
    cannonBalls: [],
    lastObjectCreatedAt: new Date(),
};

// Defines the initial state of your app to include a property called angle with the value 45. This is the angle that your cannon will be aiming when your app starts.
const initialState = {
    angle: 45,
    gameState: initialGameState,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case MOVE_OBJECTS:
            return moveObjects(state, action);
        case START_GAME:
            return StartGame(state, initialGameState);
        case SHOOT:
            return shoot(state, action);
        default:
            return state;
    }
}


export default reducer;
