import React, { Component } from 'react';
import store from './store'
//import{CHANGE_INPUT,ADD_ITEM,DELETE_ITEM}from './store/actionTypes'
//import {getTodoList , changeInputAction , addItemAction ,deleteItemAction} from './store/actionCreators'
import {getMyListAction, changeInputAction , addItemAction ,deleteItemAction} from './store/actionCreators'
import TodoListUI from './TodoListUI'

class TodoList extends Component {
    constructor(props) {
        super(props)
    this.state=store.getState();
    this.changeInputValue= this.changeInputValue.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    //关键代码------------start----------
    this.clickBtn = this.clickBtn.bind(this)
    //关键代码------------end----------
    store.subscribe(this.storeChange) //订阅Redux的状态
    }
    render() {
        return (
            <TodoListUI 
            inputValue={this.state.inputValue}
            list={this.state.list}
            changeInputValue={this.changeInputValue}
            clickBtn={this.clickBtn}
            deleteItem={this.deleteItem}
        />
        );
    }
    componentDidMount(){
        // const action=getTodoList()
        // store.dispatch(action)
        const action =getMyListAction()
        store.dispatch(action)
        //console.log(action)
    }
    storeChange(){
        //console.log('store changed')
        this.setState(store.getState())
        
    }
    
    changeInputValue(e){
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    clickBtn(){
        const action = addItemAction()
        store.dispatch(action)
    }
    deleteItem(index){
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
}
export default TodoList;