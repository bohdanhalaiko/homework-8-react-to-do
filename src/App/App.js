import React from 'react';
import '../App.css';
import Todo from './Todo.js';
import dataTodoList from './const/const.js';
import idGenerator from './idGenerator.js';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      todoLists: dataTodoList
    };
  }
  handleInputNewNameTodoList = (event) => {
    this.setState({ value: event.target.value });
  }
  handleAddTodoList = (event) => {
    event.preventDefault();
    const { value, todoLists } = this.state;
    if (value) {
      todoLists.push({ name: value, idTodoList: idGenerator(), todoList: [] });
      this.setState({ value: '', todoLists: todoLists });
    }
  }
  handleDeleteAllTodoLists = () => {
    this.setState({ todoLists: [] });
  }
  deleteTodoList = (idTodoList) => {
    const { todoLists } = this.state;
    const indexTodoList = todoLists.findIndex(el => el.idTodoList === idTodoList);
    todoLists.splice(indexTodoList, 1);
    this.setState({ todoLists: todoLists });
  }
  addLi = (idTodoList, value) => {
    const { todoLists } = this.state;
    const indexTodoList = todoLists.findIndex(el => el.idTodoList === idTodoList);
    todoLists[indexTodoList].todoList.push(
      {
        value: value,
        idLi: idGenerator(),
      }
    );
    this.setState({ todoLists: todoLists });
  }
  deleteAllLi = (idTodoList) => {
    const { todoLists } = this.state;
    const index = todoLists.findIndex(el => el.idTodoList === idTodoList);
    todoLists[index].todoList = [];
    this.setState({ todoLists: todoLists });
  }
  deleteRemameLi = (idTodoList, idLi, liState) => {
    // if (liState && !liState.input) return true;
    const { todoLists } = this.state;
    const indexTodoList = todoLists.findIndex(el => el.idTodoList === idTodoList);
    const todoList = todoLists[indexTodoList].todoList;
    const indexLi = todoList.findIndex(el => el.idLi === idLi);
    if (liState) {
      todoLists[indexTodoList].todoList[indexLi].value = liState.value;
    } else {
      todoLists[indexTodoList].todoList.splice(indexLi, 1);
    }
    this.setState({ todoLists: todoLists });
  }
  render() {
    const todoLists = this.state.todoLists.map((el) => {
      return (
        <Todo
          idTodoList={el.idTodoList} key={el.idTodoList} name={el.name}
          liElements={el.todoList}
          deleteTodoList={this.deleteTodoList}
          deleteAllTodoLists={this.deleteAllTodoLists}
          deleteAllLi={this.deleteAllLi}
          addLi={this.addLi}
          deleteRemameLi={this.deleteRemameLi}
        />
      );
    });
    return (
      <>
        <h1>Create To-do list</h1>
        <form onSubmit={this.handleAddTodoList} className="form row greate">
          <TextField
            color="primary"
            type="text"
            className="input"
            // placeholder="add new to-do list..."
            value={this.state.value}
            onChange={this.handleInputNewNameTodoList}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className="button submit"
          >
            Create
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className="button"
            onClick={this.handleDeleteAllTodoLists}
          >
            Delete all
          </Button>
        </form>
        <div className="todolist" >
          {todoLists}
        </div>
      </>
    );
  }
}

export default App;