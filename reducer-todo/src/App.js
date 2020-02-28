import React, { useReducer, useState } from 'react';
import { todoReducer, initialState } from './reducers/reducer';


const App = () => {
  const [value, setValue] = useState("");
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (item) => {
    dispatch({ type: "ADD_TODO", payload: item });
  };

  const handleChanges = e => {
    setValue(e.target.value)
  };

  return (
    <div>
      <form>
        <input type="text" name="todo" value={value} onChange={handleChanges}/>
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