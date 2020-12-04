// import logo from '../logo.svg';
import React from 'react';
import '../App.css';
import Form from './Form.js'
import List from './List.js'

class Todo extends React.Component {
  deleteTodoListTakeId = () => {
    this.props.deleteTodoList(this.props.id);
  }
  deleteAllLiTakeId = () => {
    this.props.deleteAllLi(this.props.id);
  }
  addLiTakeId = (value) => {
    this.props.addLi(this.props.id, value);
  }
  deleteLiTakeId = (idLi) => {
    this.props.deleteLi(this.props.id, idLi);
  }
  renameLiTakeId = (idLi) => {
    this.props.renameLi(this.props.id, idLi);
  }
  takeLiInputTakeId = (idLi, valueInput) => {
    this.props.takeLiInput(this.props.id, idLi, valueInput);
  }
  render() {
    return (
      <>
        <fieldset className="fieldset">
          <legend className="legend">
            <button
              onClick={this.deleteTodoListTakeId}
              className="button-legend"
            >
              delete
            </button>
            {this.props.name}
          </legend>
          <Form
            deleteAllLiTakeId={this.deleteAllLiTakeId}
            addLiTakeId={this.addLiTakeId}
          />
          <List
            deleteLiTakeId={this.deleteLiTakeId}
            renameLiTakeId={this.renameLiTakeId}
            takeLiInputTakeId={this.takeLiInputTakeId}
            liElements={this.props.liElements}
          />
        </fieldset>
      </>
    );
  }
}

export default Todo;
