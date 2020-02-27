import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item1: ""
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitTodo = e => {
    e.preventDefault();
    this.props.addTodo(e, this.state.todo);
  };

  render() {
    return (
      <form onSubmit={this.submitTodo}>
        <input type="text" name="todo" onChange={this.handleChanges} />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;