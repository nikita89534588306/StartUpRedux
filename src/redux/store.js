import { createStore } from 'redux';
import {combineReducers} from 'redux';

import testReducer from './resucers/testReducer';

const mainReducer = combineReducers({
    firstReducer: testReducer 
});
const store = createStore(mainReducer);


export default store;