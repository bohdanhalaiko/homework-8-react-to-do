import React from 'react';
import Li from './Li.js';

class List extends React.Component {
  render() {
    const liElements = this.props.liElements.map((el) => {
      return (
        <Li
          idLi={el.idLi} liName={el.value} key={el.idLi}
          idTodoList={this.props.idTodoList}
          deleteRemameLi={this.props.deleteRemameLi}
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