import React from 'react';
import '../App.css';
import Li from './Li.js';

class List extends React.Component {
  render() {
    const liElements = this.props.liElements.map((el) => {
      return (
        <Li
          id={el.idLi} liName={el.value} key={el.idLi}
          deleteLiTakeId={this.props.deleteLiTakeId}
          renameLiTakeId={this.props.renameLiTakeId}
          takeLiInputTakeId={this.props.takeLiInputTakeId}
        />
      );
    });
    return (
      <ul className="list">
        {liElements}
      </ul>
    )
  }
}

export default List;