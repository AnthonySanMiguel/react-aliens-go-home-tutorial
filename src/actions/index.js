// We are going to call this action MOVE_OBJECTS because we won't use it to update the cannon only.
// We will also use this same action to move cannon balls and flying objects.
export const MOVE_OBJECTS = 'MOVE_OBJECTS';

export const START_GAME = 'START_GAME';

export const moveObjects = mousePosition => ({
    type: MOVE_OBJECTS,
    mousePosition,
});

export const startGame = () => ({
    type: START_GAME,
});
