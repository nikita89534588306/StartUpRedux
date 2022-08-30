const initialState = {firstParam: 1, secondParam: 22}
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

export default testReducer;