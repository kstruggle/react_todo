import React from 'react'

import TodoHeader from './TodoHeader';
import TodoItem from './TodoItem';
class TodoApp extends React.Component {
      constructor(props){
          super(props);
          this.state = {
            todos:[
                {id:Date.now(),title:'学习1',completed:false},
                {id:Date.now(),title:'学习2',completed:false},
                {id:Date.now(),title:'学习3',completed:false},
            ],
          }
      }
      
      addTodo = (todo) =>{  //增加信息  自己的state  只能自己改
            todo = Object.assign({},{id:Date.now(),completed:false},todo)  //合并数据
            let todos = this.state.todos;   //不能直接修改 state   需要中介
            todos.push(todo);
            this.setState({
                todos
            })
      }
      
      render () {
          let main = (
              <ul className="list-group">
                  {
                      this.state.todos.map((todo,index)=><TodoItem key={index} todo={todo}></TodoItem>)
                  }
              </ul>
          )
        return(
          <div className="container" style={{marginTop:100}}>
              <div className="row">
                  <div className="col-md-6 col-md-offset-3">
                      <div className="card">
                          <div className="card-header">
                              <TodoHeader addTodo={this.addTodo}/>
                          </div>
                          <div className='card-body'>
                              {main}
                          </div>
                          <div className="card-footer">
                              4654654
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        )
      }
}

export default TodoApp;
