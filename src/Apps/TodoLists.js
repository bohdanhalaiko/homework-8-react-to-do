import React from 'react';
import '../App.css';
import Todo from './Todo.js'

class TodoLists extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      todoLists:
        [
          {
            name: 'Kitchen',
            todoList: [
              { value: 'Spoon', newValue: '', input: false },
              { value: 'Fork', newValue: '', input: false }
            ]
          },
          { name: 'Bedroom', todoList: [] }
        ]
    }
  }
  changeInput = (event) => {
    this.setState({ value: event.target.value });
  }
  addTodoList = (event) => {
    event.preventDefault();
    const { value, todoLists } = this.state;
    if (value) {
      todoLists.push({ name: value, todoList: [] });
      this.setState({ value: '', todoLists: todoLists });
    }
  }
  deleteTodoList = (idTodo) => {
    let todoLists = [...this.state.todoLists];
    todoLists.splice(idTodo, 1);
    this.setState({ todoLists: todoLists });
  }
  deleteAllTodoLists = () => {
    this.setState({ todoLists: [] });
  }
  addLi = (idTodo, value) => {
    const { todoLists } = this.state;
    todoLists[idTodo].todoList.push(
      {
        value: value,
        newValue: '',
        input: false
      }
    );
    this.setState({ todoLists: todoLists });
  }
  deleteAllLi = (idTodo) => {
    const { todoLists } = this.state;
    todoLists[idTodo].todoList = [];
    this.setState({ todoList: todoLists });
  }
  deleteLi = (idTodo, idLi) => {
    const { todoLists } = this.state;
    todoLists[idTodo].todoList.splice(idLi, 1);
    this.setState({ todoLists: todoLists });
  }
  renameLi = (idTodo, idLi) => {
    const { todoLists } = this.state;
    const { value, newValue, input } = todoLists[idTodo].todoList[idLi];
    if (input && newValue) {
      todoLists[idTodo].todoList[idLi] = {
        value: newValue,
        newValue: '',
        input: false
      };
    } else {
      todoLists[idTodo].todoList[idLi] = {
        value: value,
        newValue: value,
        input: true
      };
    }
    this.setState({ todoLists: todoLists });
  }
  takeLiInput = (idTodo, idLi, valueInput) => {
    const { todoLists } = this.state;
    const { value, input } = todoLists[idTodo].todoList[idLi];
    todoLists[idTodo].todoList[idLi] = {
      value: value,
      newValue: valueInput,
      input: input
    };
    this.setState({ todoLists: todoLists });
  }
  render() {
    const todoLists = this.state.todoLists.map((el, i) => {
      return (
        <Todo
          id={i} key={i} name={el.name}
          liElements={el.todoList}
          deleteTodoList={this.deleteTodoList}
          deleteAllTodoLists={this.deleteAllTodoLists}
          deleteAllLi={this.deleteAllLi}
          addLi={this.addLi}
          deleteLi={this.deleteLi}
          renameLi={this.renameLi}
          takeLiInput={this.takeLiInput}
        />
      );
    });
    return (
      <>
        <h1>Create To-do list</h1>
        <form onSubmit={this.addTodoList} className="form row greate">
          <input
            type="text"
            className="input"
            placeholder="add new to-do list..."
            value={this.state.value}
            onChange={this.changeInput}
          />
          <button type="submit" className="button submit">Create</button>
          <button className="button" onClick={this.deleteAllTodoLists}>Delete all</button>
        </form>
        <div className="todolist" >
          {todoLists}
        </div>
      </>

    );
  }
}

export default TodoLists;