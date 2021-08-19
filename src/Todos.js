import React, {useState} from 'react';

const Todos = () => {
  const [todos, setTodos] = useState(['Drink a cup of coffee', 'Go to school'])
  const add = () => {
    setTodos([...todos,'Go home'])
  }
  const del = () => {
    setTodos(todos.slice(0,-1))
  }
  return (
    <div>
      <h1>Todos</h1>
      <button onClick={add}>Add a new </button>
      <button onClick={del}>Delete the last </button>
      <ul>
        {
          todos.map((todo,index) =>
            <li key={index}>{todo}</li>
          )
        }
      </ul>
    </div>
  );
};

export default Todos;