import React, { useReducer, useState } from 'react';
import { todoReducer, initialState } from './reducers/reducer';


const App = () => {
  const [value, setValue] = useState("");
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (e) => {
    e.preventDefault()
    dispatch({ type: "ADD_TODO", payload: value });
  };

  const handleChanges = e => {
    setValue(e.target.value)
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input type="text" name="value" value={value} onChange={handleChanges}/>
        <button>Add</button>
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