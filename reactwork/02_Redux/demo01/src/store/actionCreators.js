//import {CHANGE_INPUT , ADD_ITEM,DELETE_ITEM,GET_LIST}  from './actionTypes'
import {GET_MY_LIST,CHANGE_INPUT , ADD_ITEM,DELETE_ITEM,GET_LIST}  from './actionTypes'
//import axios from 'axios'
export const changeInputAction = (value)=>({
    type:CHANGE_INPUT,
    value
})

export const addItemAction = ()=>({
    type:ADD_ITEM
})

export const deleteItemAction = (index)=>({
    type:DELETE_ITEM,
    index
})

export const getListAction = (data)=>({
    type:GET_LIST,
    data
})
/**thunk 
 * export const getTodoList = () =>{
    return (dispatch)=>{
        axios.get('http://mock.studyinghome.com/mock/5e9d3c3a301a4f07a0c8aa25/reduxdemo1/getList').then((res)=>{
            const data = res.data
            const action = getListAction(data)
            dispatch(action)

        })
}}
**/

export const getMyListAction=()=>({
    type:GET_MY_LIST
})
