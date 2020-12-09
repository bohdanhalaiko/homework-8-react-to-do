import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }
  handleButtonAddLi = (event) => {
    event.preventDefault();
    const { value } = this.state;
    if (value) {
      this.setState({ value: '' });
      this.props.addLi(this.props.idTodoList, value);
    }
  }
  handleInputForm = (event) => {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <form onSubmit={this.handleButtonAddLi} className="form">
        <TextField
          type="text"
          className="input"
          placeholder="add..."
          value={this.state.value}
          onChange={this.handleInputForm}
        />
        <Button
          variant="contained"
          color="primary" type="submit"
          className="button submit"
        >
          Add</Button>
        <Button
          variant="contained"
          color="secondary"
          className="button delete-list"
          onClick={() => this.props.deleteAllLi(this.props.idTodoList)}
        >
          Delete all
        </Button>
      </form>
    );
  }
}

export default Form;