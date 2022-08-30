
import { connect } from "react-redux/es/exports"

function TestComp(props) {
    return(
        <>
            <p>firstValue: {props.firstValue}</p>
            <p>secondValue: {props.secondValue}</p>
            <button onClick={props.addFirstValue}>Add firstValue</button>
            <button onClick={props.addSecondValue}>Add secondValue</button>
        </>
    )
}

function mapStateToProps(store) {
    return{
        firstValue: store.firstReducer.firstParam,
        secondValue: store.firstReducer.secondParam
    }
}

function mapDispatchToProps(dispatch){
    return{
        addFirstValue: () => {
            dispatch({type:"INC_FIRST"})
        },
        addSecondValue: ()=> {
            dispatch({type:"ADD_SECOND", payload: 666})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TestComp)