import { ReactEventHandler, useState } from 'react';
import TodoList from './TodoList';

type Todos = {
  id: number;
  text: string;
};

function Todo() {
  const [todoText, setTodoText] = useState('');
  const [todoList, setTodoList] = useState<Todos[]>([]);

  function onHandleTodoTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTodoText(e.target.value);
  }

  function onSubmitTodo() {
    setTodoList((prev) => {
      return [...prev, { id: Math.random(), text: todoText }];
    });

    setTodoText('');
  }

  return (
    <div>
      <h1>TODO APP</h1>
      <h2>Add Todo</h2>
      <input
        id="text"
        type="text"
        value={todoText}
        onChange={onHandleTodoTextChange}
      />
      <button onClick={onSubmitTodo}>Submit</button>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default Todo;
