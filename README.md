start up for react-redux

1.Создаем хранилище: 
import { createStore } from 'redux';
const store = createStore(mainReducer);

2.Создаем mainReduser:
    import {combineReducers} from 'redux';
    const mainReducer = combineReducers({
        firstReducer: testReducer 
    });

3. Создаем редьюсер
    const initialState = {firstParam: 0, secondParam: 0}
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

4. Для изменения состояния хранилища используем метод dispatch
    //пример dispatch
    store.dispatch({type:"INC_FIRST"});
    store.dispatch({type:"ADD_SECOND", payload: 666});

5. для того что бы все наши компоненты имели доступ к хранилищу используем Provider

    import { Provider } from 'react-redux';
    ReactDOM.render(
        <Provider store={store}>
        <Main />
        </Provider>, 
    document.getElementById('root'));

6. компонент создается следующим образом
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
