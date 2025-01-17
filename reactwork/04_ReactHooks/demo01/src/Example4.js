import React,{useState, createContext,useContext} from 'react';

const CountContext = createContext();
function Counter(){
    let count = useContext(CountContext)
    return (<h2>{count}</h2>)
}
function Example(){
    //1.声明
    const [count,setCount]=useState(0)//数组结构
    
    return (
        <div>
            {/*2.读取 */}
        <p>You clicked {count} times</p>
        {/* 3. 改变 */}
        <button onClick={()=>{setCount(count+1)}}>click me</button>
    <CountContext.Provider value={count}>
    <Counter />
    </CountContext.Provider>
    </div>
    )
}
export default Example;