import { calculateAngle } from '../utils/formulas';

function moveObjects(state, action) {
    if (!action.mousePosition) return state;
    // Extracts the x and y properties from mousePosition
    const { x, y } = action.mousePosition;
    // and passes them to the calculateAngle function to get the new angle.
    const angle = calculateAngle(0, 0, x, y);
    // Then, generates a new state with the new angle.
    return {
        ...state,
        angle,
    };
}

export default moveObjects;
