import { takeEvery ,put } from 'redux-saga/effects'  
import {GET_MY_LIST} from './actionTypes'
import {getListAction} from './actionCreators'
import axios from 'axios'

//generator函数
function* mySaga() {
    //等待捕获action
    yield takeEvery(GET_MY_LIST, getList)
}

function* getList(){
    
    // axios.get('http://mock.studyinghome.com/mock/5e9d3c3a301a4f07a0c8aa25/reduxdemo1/getList').then((res)=>{
    //     const data = res.data
    //     const action = getListAction(data)
    //     put(action)
    // })
    const res = yield axios.get('http://mock.studyinghome.com/mock/5e9d3c3a301a4f07a0c8aa25/reduxdemo1/getList')
    const action = getListAction(res.data)
    yield put(action)
}

export default mySaga;