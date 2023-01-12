import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';

const logMiddleware = (store) => (nextDispatch) => (action) => {
    console.log('Action:', action.type);
    return nextDispatch(action)
}

const stringMiddleware = (store) => (nextDispatch) => (action) => {
    if (typeof action === 'string') {
        return nextDispatch({
            type: action
        })
    }
    return nextDispatch(action)
}

const store = createStore(reducer, applyMiddleware(thunk, stringMiddleware, logMiddleware))

const test = () => (dispatch) => (action) => {
    console.log('test');
    return dispatch(action)
}
store.dispatch(test)
export default store;