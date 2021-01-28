
import React from 'react';

const ToDo = ({ onClick, id, todo, completed }) => {

  return (
    <li className={completed ? 'completed' : 'not-completed'} onClick={onClick}>{todo}</li>
  )
}

export default ToDo;