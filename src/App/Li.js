import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
    if (!this.state.value) return true;
    const newInput = this.state.input ? false : true;
    this.setState({ input: newInput });
    if(newInput) return true;
    this.props.deleteRemameLi(this.props.idTodoList, this.props.idLi, this.state);
  }
  handleInputValue = (event) => {
    this.setState({ value: event.target.value });
  }
  render() {
    let content =
      <div className="input input-text">
        <p onClick={this.handleButtonRenameLi} className="text">
          {this.state.value}
        </p>
      </div>;
    if (this.state.input) {
      content =
        <TextField
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
          <Button
            variant="contained"
            color="primary"
            className="button hide"
            type="submit"
          >
            Rename
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className="button"
            onClick={this.handleButtonDeleteLi}
          >
            Delete
          </Button>
        </form>
      </li>
    )
  }
}

export default Li;