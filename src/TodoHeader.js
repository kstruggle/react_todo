import React from 'react'
const ENTRY_KEY = 13;  //回车
class TodoHeader extends React.Component {
    handleKeydown = (event) =>{
        if (event.keyCode === ENTRY_KEY && event.target.value != null && event.target.value.length >0) {
            let title = event.target.value;
            this.props.addTodo({title});
            event.target.value = '';
        }
    }
    render () {
        return(
                <div className="form-group">
                  <input onKeyDown={this.handleKeydown} autoFocus={true} type="text" className="form-control" placeholder={'请输入'}/>
                </div>
        )
    }
}

export default TodoHeader;
