import { createStore ,applyMiddleware,compose} from 'redux'  //  引入createStore方法
import reducer from './reducer' 
import createSagaMiddleware from 'redux-saga'   //引入saga
import mySagas from './sagas' 
const sagaMiddleware = createSagaMiddleware();   //创建saga中间件




//thunk使用
// import thunk from 'redux-thunk'  
// const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
//const enhancer = composeEnhancers(applyMiddleware(thunk))    
const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
const store = createStore( reducer, enhancer) 
sagaMiddleware.run(mySagas)
export default store   //暴露出去