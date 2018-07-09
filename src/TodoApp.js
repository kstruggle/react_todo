import React from 'react'

import TodoHeader from './TodoHeader';
import TodoItem from './TodoItem';
import TodoFooter from './TodoFooter';
import * as filterTypes from './filter-types';


class TodoApp extends React.Component {
      constructor(props){
          super(props);
          this.state = {
            todos:[
                // {id:Date.now()+1,title:'学习1',completed:true},
                //                 // {id:Date.now()+2,title:'学习2',completed:true},
                //                 // {id:Date.now()+3,title:'学习3',completed:true},
            ],
            filterTypes:filterTypes.All
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
      toggle = (id) =>{  //点击切换 选中未选中
          let todos = this.state.todos;   //不能直接修改 state   需要中介
          todos = todos.map(todo=>{
            if (todo.id === id){
                todo.completed = !todo.completed
            }
            return todo;
          })
          this.setState({
              todos
          })
      }
      delete = (id) =>{
          let todos = this.state.todos;   //不能直接修改 state   需要中介
          let dele_todo_index = todos.findIndex(todo=>todo.id === id);   //找到数组的索引值
          todos.splice(dele_todo_index,1);
          this.setState({
              todos
          })
      }
      allToggle = (event)=>{
          let checked = event.target.checked;
          let todos = this.state.todos;   //不能直接修改 state   需要中介

          // if (checked){
          //     todos = todos.map((todo,index)=>{
          //         return todo.completed = true;
          //     })
          // } else {
          //     todos = todos.map((todo,index)=>{
          //         return todo.completed = false;
          //     })
          // }
          todos = todos.map(todo=>{
              todo.completed = checked;
              return todo;
          });
          this.setState({
              todos
          })
      }

      changeType=(newFilterType)=>{   //点击切换状态 显示对应状态的消息
          this.setState({
            filterTypes:newFilterType
          })
      }

      deleteCompleted = ()=>{//删除已完成的
          let todos = this.state.todos;   //不能直接修改 state   需要中介
          todos = todos.filter((todo)=>{
             return !todo.completed;  //  return true  判断每个todo 的完成情况 是true就不返回  这个TODO 是false返回  保留未完成的 生成新数组
          })
          this.setState({
            todos
          })
      }

      render (){
          //获取完成的数量
          let todos = this.state.todos;   //不能直接修改 state   需要中介
          let activeTodoCount = todos.reduce((count,todo)=>{
              return count+(todo.completed?0:1)     //循环加每个 状态  如果返回的和为0  说明都完成了
          },0);

          let showTodos = todos.filter((todo)=>{
              switch (this.state.filterTypes) {//确定当前的 type  是什么
                case filterTypes.Active: //未完成的
                  return !todo.completed;
                  break;
                case filterTypes.Completed: //完成的
                  return todo.completed;
                  break;
                default:
                  return true;
              };
          })

          let main = (
              <ul className="list-group">

                {
                  todos.length > 0
                    ? <li className='list-group-item'>
                      <input type="checkbox" onChange={this.allToggle} checked={activeTodoCount === 0}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {activeTodoCount === 0?'全部取消':'全部选中'}
                    </li>
                    : null
                }

                {
                  showTodos.map((todo,index)=><TodoItem key={index} todo={todo} toggle={this.toggle} delete={this.delete}></TodoItem>)
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
                    <TodoFooter activeTodoCount = {activeTodoCount} changeType={this.changeType} deleteCompleted={this.deleteCompleted}/>
                  </div>
                      </div>
                  </div>
              </div>
          </div>
        )
      }
}

export default TodoApp;
