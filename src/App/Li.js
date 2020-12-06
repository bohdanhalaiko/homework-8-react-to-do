import React from 'react';

class Li extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.liName,
      input: false
    };
  }
  handleButtonDeleteLi = (event) => {
    event.preventDefault();
    this.props.deleteRemameLi(this.props.idTodoList, this.props.idLi);
  }
  handleButtonRenameLi = (event) => {
    event.preventDefault();
    const newInput = this.state.input ? false : true;
    this.setState({ input: newInput });
    this.props.deleteRemameLi(this.props.idTodoList, this.props.idLi, this.state);
  }
  handleInputValue = (event) => {
    this.setState({ value: event.target.value });
  }
  render() {
    let content =
      <div className="input input-text">
        <p onClick={this.handleButtonRenameLi} className="text"            >
          {this.state.value}
        </p>
      </div>;
    if (this.state.input) {
      content =
        <input
          onChange={this.handleInputValue}
          className="input"
          placeholder='enter new name'
          value={this.state.value}
        />
    }
    return (
      <li className='li' id={this.props.idLi}>
        <form onSubmit={this.handleButtonRenameLi} className="form row">
          {content}
          <button className="button hide" type="submit">Rename</button>
          <button className="button" onClick={this.handleButtonDeleteLi}>
            Delete
            </button>
        </form>
      </li>
    )
  }
}

export default Li;