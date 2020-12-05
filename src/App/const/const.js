import idGenerator from '../idGenerator.js';

const dataTodoList = [
  {
    name: 'Kitchen',
    idTodoList: idGenerator(),
    todoList: [
      { value: 'Spoon', newValue: '', input: false, idLi: idGenerator() },
      { value: 'Fork', newValue: '', input: false, idLi: idGenerator() }
    ]
  },
  { name: 'Bedroom', idTodoList: idGenerator(), todoList: [] }
];

export default dataTodoList;