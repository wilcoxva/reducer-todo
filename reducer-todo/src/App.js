import React, { useReducer, useState } from 'react';
import { todoReducer, initialState } from './reducers/reducer'


const App = () => {
  const [value, setValue] = useState("");
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (item) => {
    dispatch({ type: "ADD_TODO", payload: item });
  };

  const handleChanges = e => {
    let newValue = { [e.target.name]: e.target.value }
    setValue(newValue)
  };

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todo" onChange={handleChanges}/>
        <button onClick={addTodo}>Add</button>
      </form>
      <div>
        {state.todos.map(todo => {
          return <p>{todo.item}</p>
        })}
      </div>
    </div>
  )
}

export default App;