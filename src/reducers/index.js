import {MOVE_OBJECTS} from "../actions";
import moveObjects from './moveObjects';

// Defines the initial state of your app to include a property called angle with the value 45. This is the angle that your cannon will be aiming when your app starts.
const initialState = {
    angle: 45,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case MOVE_OBJECTS:
            return moveObjects(state, action);
        default:
            return state;
    }
}

export default reducer;
