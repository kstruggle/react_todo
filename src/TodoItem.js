import React from 'react'

class TodoItem extends React.Component {
    render() {
        return (
            <li className='list-group-item'>
                <div className="row">
                    <div className="col-xl-1">
                        <input type="checkbox"/>
                    </div>
                    <div className="col-xl-10">
                        {this.props.todo.title}
                    </div>
                    <div className="col-xl-1">
                        <button className="btn btn-danger btn-sm">X</button>
                    </div>
                </div>
            </li>
        )
    }
}

export default TodoItem;