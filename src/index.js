import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

import TodoApp from './TodoApp.js';

import TodoModel from './TodoModel'
let model = new TodoModel();

function render(){
    ReactDOM.render(
      <TodoApp model={model}/>,
      document.getElementById('root')
    );
}

model.subscribe(render);
render();
