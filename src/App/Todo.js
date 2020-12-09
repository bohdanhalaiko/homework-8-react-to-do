import React from 'react';
import Form from './Form.js';
import List from './List.js';
import Button from '@material-ui/core/Button';


class Todo extends React.Component {
  render() {
    return (
      <fieldset className="fieldset">
        <legend className="legend">
          <Button
            variant="contained"
            onClick={() => this.props.deleteTodoList(this.props.idTodoList)}
            className="button-legend"
          >
            delete
          </Button>
          {this.props.name}
        </legend>
        <Form
          addLi={this.props.addLi}
          deleteAllLi={this.props.deleteAllLi}
          idTodoList={this.props.idTodoList}
        />
        <List
          liElements={this.props.liElements}
          idTodoList={this.props.idTodoList}
          deleteRemameLi={this.props.deleteRemameLi}
        />
      </fieldset>
    );
  }
}

export default Todo;
