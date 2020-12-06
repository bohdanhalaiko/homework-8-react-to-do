import idGenerator from '../idGenerator.js';

const dataTodoList = [
  {
    name: 'Kitchen',
    idTodoList: idGenerator(),
    todoList: [
      { value: 'Spoon', idLi: idGenerator() },
      { value: 'Fork', idLi: idGenerator() }
    ]
  },
  { name: 'Bedroom', idTodoList: idGenerator(), todoList: [] }
];

export default dataTodoList;