import React from 'react'

class TodoItem extends React.Component {
    render() {
        let todo = this.props.todo;
        return (
            <li className='list-group-item'>
              <div className="row">
                <div className="col-xl-1">
                  <input type="checkbox" onChange={()=>this.props.toggle(todo.id)} checked={todo.completed}/>
                </div>
                <div className="col-xl-10" style={{textDecoration:todo.completed?'line-through':''}}>
                  {todo.title}
                </div>
                <div className="col-xl-1">
                  <button onClick={()=>this.props.delete(todo.id)} className="btn btn-danger btn-sm">X</button>
                </div>
              </div>
            </li>
        )
    }
}

export default TodoItem;
