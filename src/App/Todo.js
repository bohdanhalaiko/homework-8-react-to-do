// import logo from '../logo.svg';
import React from 'react';
import Form from './Form.js'
import List from './List.js'

class Todo extends React.Component {
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
      <fieldset className="fieldset">
        <legend className="legend">
          <button
            onClick={() => this.props.deleteTodoList(this.props.idTodoList)}
            className="button-legend"
          >
            delete
            </button>
          {this.props.name}
        </legend>
        <Form
          idTodoList={this.props.idTodoList}
          deleteAllLi={this.props.deleteAllLi}
          addLi={this.props.addLi}
        />
        <List
          deleteLiTakeId={this.deleteLiTakeId}
          renameLiTakeId={this.renameLiTakeId}
          takeLiInputTakeId={this.takeLiInputTakeId}
          liElements={this.props.liElements}
        />
      </fieldset>
    );
  }
}

export default Todo;
