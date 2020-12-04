import React from 'react';
import '../App.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }
  buttonAddLi = (event) => {
    event.preventDefault();
    const { value } = this.state;
    if (value) {
      this.setState({ value: '' });
      this.props.addLiTakeId(value);
    }
  }
  buttonDeleteAllLi = () => {
    this.props.deleteAllLiTakeId();
  }
  changeInputForm = (event) => {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <form onSubmit={this.buttonAddLi} className="form">
        <input
          type="text"
          className="input"
          placeholder="add..."
          value={this.state.value}
          onChange={this.changeInputForm}
        />
        <button type="submit" className="button submit">Add</button>
        <button className="button delete-list" onClick={this.buttonDeleteAllLi}>
          Delete all
        </button>
      </form>
    );
  }
}

export default Form;