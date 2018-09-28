
// Actions

const START_TIMER = 'START_TIMER';
const RESTART_TIMER = 'RESTART_TIMER';
const ADD_SECOND = 'ADD_SECOND';
const TOGGLE_TIMER = 'TOGGLE_TIMER';

// Action Creators

function startTimer(){
    return{
        type : START_TIMER
    };
}

function restartTimer(){
    return{
        type : RESTART_TIMER
    };
}
function toggleTimer(){
    return {
        type: TOGGLE_TIMER
    };
}

function addSecond(){
    return{
        type : ADD_SECOND
    };
}

// reducer 

const TIME_DURATION = 15000;

const initialState = {
    isPlaying: false,
    isPaused: false,
    elapsedTime: 0,
    timeDuration: TIME_DURATION,
};

function reducer(state = initialState, action){
    switch(action.type){
        case START_TIMER:
            return applyStartTimer(state);
        case RESTART_TIMER:
            return applyRestartTimer(state);
        case ADD_SECOND:
            return applyAddSecond(state);
        case TOGGLE_TIMER:
            return applyToggleTimer(state);
        default:
            return state;
    }
}

// Reducer Functions

function applyStartTimer(state){
    return{
        ...state,
        isPlaying: true,
    };
}

function applyRestartTimer(state){
    return{
        ...state,
        isPlaying: false,
        isPaused: false,
        elapsedTime: 0,
    };
}

function applyAddSecond(state){
    if(state.elapsedTime < TIME_DURATION){
        return{
            ...state,
            elapsedTime : state.elapsedTime + 1
        };
    }
    else {
        return{
            // ...state,
            // isPlaying: false,
            // elapsedTime: 0
            initialState
        };
    }
}

function applyToggleTimer(state){
    return{
        ...state,
        isPaused: !state.isPaused,        
    };
}

// Export Action Creator

const actionCreators = {
    startTimer,
    restartTimer,
    addSecond,
    toggleTimer,
};

export { actionCreators };

export default reducer;

