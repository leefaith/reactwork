import React,{Component, useLayoutEffect} from 'react'

class App extends Component{
    render(){
        return(
           <ul className="my-list">
               <li>{false?'Lisa.com':'lisa'}</li>
               <li> I love react</li>
               </ul>
        )
        // var child1 = React.createElement('li',null,'lfj.com')
        // var child2= React.createElement('li',null,'I love react')
        // var root = React.createElement('ul',{classNAme:'my-list',child1,child2})
    }
}
export default App;