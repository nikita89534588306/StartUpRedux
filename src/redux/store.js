import { createStore } from 'redux';

const store = createStore(reducer);

function value_1(state, action) {
    switch(action.type) {
        case ACTION_1: return action.value_1;
        
        default: return state;
    }
}