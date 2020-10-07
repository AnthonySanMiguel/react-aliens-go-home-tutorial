import {MOVE_OBJECTS, START_GAME} from "../actions";
import moveObjects from './moveObjects';
import startGame from "../components/StartGame";

const initialGameState = {
    // Indicates if the game is running or not.
    started: false,
    // Holds how many flying objects the user has killed.
    kills: 0,
    // Holds how many lives the user has.
    lives: 3,
    flyingObjects: [],
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
            // When startGame is called on click, zero the kills counter and give three lives again
        case START_GAME:
            return startGame(state, initialGameState);
        default:
            return state;
    }
}

export default reducer;
