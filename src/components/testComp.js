//подключаем хранилище
import { connect } from "react-redux/es/exports"

//создаем компонент ОБЯЗАТЕЛЬНО С ПРОПСАМИ
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

//создаем функцию которая запихивает параметры из хранилища в пропсы
function mapStateToProps(store /*сдесь обязательно указываем то 
                                хранилище из которого будем 
                                брать объекты*/ ) {
    return{
        /*имя параметра в пропсах*/     /*путь к параметру из хранилища*/
        firstValue:                     store.firstReducer.firstParam,
        /*еще один пропс все по аналогии */
        secondValue:                    store.firstReducer.secondParam
    }
}

//фукнкция для проталкивания дипач в пропсы компонента
//dispatch - изменяет состояние хранилища
function mapDispatchToProps(dispatch/*обязательно принимаем
                                             данный параметр*/){
    return{
        /*переменная в которой хранится ссылка на 
        функцию диспач кторая меняет состояние хранилища в 
        зависимости от акшена*/
        addFirstValue: () => {
            dispatch({type:"INC_FIRST"})
        },
        addSecondValue: ()=> {
            dispatch({type:"ADD_SECOND", payload: 666})
        }
    }
}
/*далее имтортируем компонент таким образом */
/*connect - создает и возвращает компонент который может взаимодействовать
с хранилищем 
mapStateToProps,mapDispatchToProps - функции для взаимодействия с хранилищем
TestComs - сам компонент */

export default connect(mapStateToProps,mapDispatchToProps)(TestComp)