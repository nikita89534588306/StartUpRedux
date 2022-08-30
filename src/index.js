import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {combineReducers} from 'redux';
import TestComp from './components/testComp';


const initialState = {firstParam: 1, secondParam: 3}
const testReducer = (state=initialState, action) => {
    switch(action.type){
        case "INC_FIRST":
        return {
            ...state, firstParam: state.firstParam + 1
        }
        case "ADD_SECOND":
        return {
            ...state, secondParam: state.secondParam + action.payload
        }
        default: return state;
    }
}

const mainReducer = combineReducers({
    firstReducer: testReducer 
});


const store = createStore(mainReducer);

const testFoo = ()=>{
    store.dispatch({type:"INC_FIRST"});
    store.dispatch({type:"ADD_SECOND", payload: 666});
    console.log(store.getState())}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
        <TestComp/>
        <hr></hr><br></br>
        <button onClick={testFoo}>XUI</button>
     </Provider>
  </React.StrictMode>
);

function App(){
    return(
        <>
            <button onClick={()=>{console.log(`Hi!`)}}>XUI</button>
        </>
    )
}   