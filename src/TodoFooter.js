import React from 'react'
import * as filterTypes from './filter-types';


export default class TodoFooter extends React.Component {
    render() {
        return (
           <div className='row'>
             <div className='col-xs-3'>
               还有{this.props.activeTodoCount}件待办事件
             </div>
             <div className='col-xs-6 text-center'>
               <button className='btn-secondary btn-sm' onClick={()=>this.props.changeType(filterTypes.All)}>全部</button>
               <button className='btn-secondary btn-sm' onClick={()=>this.props.changeType(filterTypes.Active)}>未完成</button>
               <button className='btn-secondary btn-sm' onClick={()=>this.props.changeType(filterTypes.Completed)}>已完成</button>

               {/*为啥这个调用父组件的方法  不用写成  ()=> 形式 ？？？？？  */}
               <button className='btn-secondary btn-sm' onClick={this.props.deleteCompleted}>删除已完成</button>
             </div>
             <div className='col-xs-3'></div>
           </div>
        )
    }
}
