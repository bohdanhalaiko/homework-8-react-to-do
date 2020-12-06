import React from 'react';
import idGenerator from './idGenerator.js'
import '../App.css';

class Li extends React.Component {
  buttonDeleteLi = (event) => {
    event.preventDefault();
    this.props.deleteLiTakeId(this.props.id);
  }
  buttonRenameLi = (event) => {
    event.preventDefault();
    this.props.renameLiTakeId(this.props.id);
  }
  inputNewValue = (event) => {
    this.props.takeLiInputTakeId(this.props.id, event.target.value);
  }
  render() {
    let content =
      <div className="input input-text">
        <p onClick={this.buttonRenameLi} className="text"            >
          {this.props.liName}
        </p>
      </div>;
    if (this.props.liName.input) {
      content =
        <input
          onChange={this.inputNewValue}
          className="input"
          placeholder='enter new name'
          value={this.props.liName.newValue}
        />
    }
    return (
      <li className='li' id={this.props.id}>
        <form onSubmit={this.buttonRenameLi} className="form row">
          {content}
          <button className="button hide" type="submit">Rename</button>
          <button className="button" onClick={this.buttonDeleteLi}>Delete</button>
        </form>
      </li>
    )
  }
}

export default Li;