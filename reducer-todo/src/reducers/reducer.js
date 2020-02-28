export const initialState = {
    todos: [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
    }]};
 
 export const todoReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        const newTodo = { item: action.payload }
        return { 
            ...state,
            todos: [...state.todos, newTodo]
        };
      default:
        return state;
    }
  };
