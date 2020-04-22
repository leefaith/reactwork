import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
//useState是react自带的一个hook函数，它的作用是用来声明状态变量。

function Index(){
    useEffect(()=>{
        console.log('useEffect=>老弟，你来了！Index页面');
        return()=>{
            console.log('老弟，你走了!Index页面');    
        }
    },[])
    return <h2>Lisa.com</h2>;
}
function List() {
    useEffect(()=>{
        console.log('useEffect=>老弟，你来了！List页面')
        return ()=>{
            console.log('====================')
        }
    })
    return <h2>List-Page</h2>;
}
function Example(){
    //1.声明
    const [count,setCount]=useState(0)//数组结构
    useEffect(()=>{
        console.log(`useEffect=>You clicked ${count} times`)
        
    },[count])
    return (
        <div>
            {/*2.读取 */}
        <p>You clicked {count} times</p>
        {/* 3. 改变 */}
        <button onClick={()=>{setCount(count+1)}}>click me</button>
        <Router>
            <ul>
                <li> <Link to="/">首页</Link> </li>
                <li><Link to="/list/">列表</Link> </li>
            </ul>
            <Route path="/" exact component={Index} />
            <Route path="/list/" component={List} />
        </Router>
    </div>
    )
}
export default Example;