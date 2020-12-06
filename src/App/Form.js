import React from 'react';

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
        <input
          type="text"
          className="input"
          placeholder="add..."
          value={this.state.value}
          onChange={this.handleInputForm}
        />
        <button type="submit" className="button submit">Add</button>
        <button
          className="button delete-list"
          onClick={() => this.props.deleteAllLi(this.props.idTodoList)}
        >
          Delete all
        </button>
      </form>
    );
  }
}

export default Form;