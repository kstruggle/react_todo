


//把 操作数据的逻辑都抽出来  跟mvc 的model一样
export default class TodoModel {
  constructor() {
    this.STORE_KET = 'todos'    //向 localStorage 里面写入的时候需要这个key
    this.todos =
      localStorage.getItem(this.STORE_KET)
      ? JSON.parse(localStorage.getItem(this.STORE_KET))
      : [];  //存放所有的todos

    this.listeners = [];    //监听者   数据改变不通过 setState 不会重新渲染页面   用这个监听模型变化
  }


  subscribe(listener){//订阅
    this.listeners.push(listener)   //this.listeners  中 是个render() 方法
  }
  emit(){ //发射
    this.listeners.forEach(listener => listener())   // render()方法执行
  }


  saveAndNodify(todos){  //公告调用
    localStorage.setItem(this.STORE_KET,JSON.stringify(todos));
    this.todos = todos;
    this.emit();//通知 改变了
  }
  addTodo = (todo) =>{  //增加信息  自己的state  只能自己改
        todo = Object.assign({},{id:Date.now(),completed:false},todo)  //合并数据
        let todos = this.todos;   //不能直接修改 state   需要中介
        todos.push(todo);
        this.saveAndNodify(todos);

  }

  toggle = (id) =>{  //点击切换 选中未选中
      let todos = this.todos;   //不能直接修改 state   需要中介
      todos = todos.map(todo=>{
        if (todo.id === id){
            todo.completed = !todo.completed
        }
        return todo;
      })
      console.log(todos);
      this.saveAndNodify(todos);
  }

  delete = (id) =>{
      let todos = this.todos;   //不能直接修改 state   需要中介
      let dele_todo_index = todos.findIndex(todo=>todo.id === id);   //找到数组的索引值
      todos.splice(dele_todo_index,1);
      this.saveAndNodify(todos);
  }

  allToggle = (event)=>{
      let checked = event.target.checked;
      let todos = this.todos;   //不能直接修改 state   需要中介
      todos = todos.map(todo=>{
          todo.completed = checked;
          return todo;
      });
      this.saveAndNodify(todos);
  }

  deleteCompleted = ()=>{//删除已完成的
      let todos = this.todos;   //不能直接修改 state   需要中介
      todos = todos.filter((todo)=>{
         return !todo.completed;  //  return true  判断每个todo 的完成情况 是true就不返回  这个TODO 是false返回  保留未完成的 生成新数组
      })
      console.log(todos);
      this.saveAndNodify(todos);
  }







}
