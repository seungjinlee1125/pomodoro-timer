
// Actions

const START_TIMER = 'START_TIMER';
const RESTART_TIMER = 'RESTART_TIMER';
const ADD_SECOND = 'ADD_SECOND';

// Action Creator

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

function addSecond(){
    return{
        type : ADD_SECOND
    };
}

// reducer 

const TIME_DURATION = 1500;

const initialState = {
    isPlaying: false,
    elapsedTime: 0,
    timeDuration: TIME_DURATION,
}

function reducer(state = initialState, action){
    switch(action.type){
        case START_TIMER:
            return applyStartTimer(state);
        case RESTART_TIMER:
            return applyRestartTimer(state);
        case ADD_SECOND:
            return applyAddSecond(state);
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
        elapsedTime: 0,
    };
}

function applyStartTimer(state){
    if(state.elapsedTime < TIME_DURATION){
        return{
            ...state,
            elapsedTime : elapsedTime + 1
        };
    }
    else {
        return{
            ...state,
            isPlaying: false,
        };
    }
}

// Action Creator

const actionCreator = {
    startTimer,
    restartTimer,
    addSecond
}

export default reducer;

