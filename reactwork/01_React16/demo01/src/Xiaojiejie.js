import React, { Component, Fragment } from 'react'
import axios from 'axios'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'
import Boss from './Boss'
import {CSSTransition , TransitionGroup} from 'react-transition-group'
class Xiaojiejie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: []
        }
    }

    //生命周期
    // componentWillMount() {
    //     console.log('componentWillMount----组件将要挂载到页面的时刻')
    // }
    // componentDidMount() {
    //     console.log('componentDidMount----组件挂载完成的时刻执行')
    // }
    // shouldComponentUpdate() {
    //     console.log('1-shouldComponentUpdate')
    //     return true
    // }
    // componentWillUpdate() {
    //     console.log('2- componentWillUpdate');
    // }
    // componentDidUpdate() {
    //     console.log('4-componentDidUpdate');
    // }

    componentDidMount(){
        axios.get('http://mock.studyinghome.com/mock/5e9aa0dd301a4f07a0c8aa12/ReactDemo01/Xiaojiejie')
            .then((res)=>{console.log('axios 获取数据成功:'+JSON.stringify(res))  
            this.setState({
                list:res.data.data
            })})
            .catch((error)=>{console.log('axios 获取数据失败'+error)})
    }
    
    render() {
        //console.log('3-render---组件挂载中.......')
        return (
            //flex
          
            < Fragment >

            <div>
                <label htmlFor="lisa">增加服务</label>
                <input
                    id="lisa"
                    className="input"
                    value={this.state.inputValue}
                    onChange={this.inputChange.bind(this)}
                    ref={(input => { this.input = input })}
                />
                <button onClick={this.addList.bind(this)}>增加服务</button>
            </div>
            <ul ref={(ul) => { this.ul = ul }}>
            <TransitionGroup>
                {
                    this.state.list.map((item, index) => {
                        return (
                            <CSSTransition
                            timeout={1000}
                            classNames='boss-text'
                            unmountOnExit
                            appear={true}
                            key={index+item}  
                        >
                            <XiaojiejieItem
                                //avname='lisa'
                                key={index + item}
                                content={item}
                                index={index}
                                list={this.state.list}
                                deleteItem={this.deleteItem.bind(this)} />
 </CSSTransition>
                        )
                    })

                }
 </TransitionGroup>

            </ul>
            <Boss/>
            </Fragment >
        )
    }
    inputChange(e) {
        //console.log(e.target.value)
        //this.state.inputValue=e.target.value //改变状态不可以

        this.setState({
            inputValue: this.input.value
        })
    }
    //增加列表
    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        }, () => {
            console.log(this.ul.querySelectorAll('li').length);
        })


    }
    //删除列表
    deleteItem(index) {
        //console.log(index);
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}
export default Xiaojiejie
//npm install axios ---不写依赖
//nom install -g axios ---全局安装
//npm install -save axios  --下载添加依赖  发开模式
//npm install -save-dev axios  --还有个dev-dependece生产环境