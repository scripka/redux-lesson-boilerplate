import React from 'react';
import ToDo from '../components/ToDo';
import { connect } from 'react-redux';
import { completeTask } from '../actions';



const ToDoList = ({ todos, completeTask }) => {
  if(todos.length) {
    const displayTodos = todos.map(todo => {
      return (
        <ToDo
          {...todo}
          key={todo.id}
          onClick={()=> completeTask(todo.id)}
        />
      )
    })
    return (
      <ul>
        {displayTodos}
      </ul>
    )

  } else {
    return null;
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  completeTask: id => dispatch( completeTask(id) )
})

export default connect(mapStateToProps, mapDispatchToProps, null)(ToDoList);