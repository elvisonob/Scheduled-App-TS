import { useState } from 'react';
import TodoList from './TodoList';

type Todos = {
  id: number;
  text: string;
};

function Todo() {
  const [todoText, setTodoText] = useState('');
  const [todoList, setTodoList] = useState<Todos[]>([]);

  function onChangeTodo(e: React.ChangeEvent<HTMLInputElement>) {
    setTodoText(e.target.value);
  }

  function onSubmitTodo() {
    if (!todoText.trim()) return;
    setTodoList((prev) => {
      return [...prev, { id: Math.random(), text: todoText }];
    });
    setTodoText('');
  }

  return (
    <div>
      <h1>TODO APP</h1>
      <h2>Add Todo</h2>
      <input id="text" type="text" value={todoText} onChange={onChangeTodo} />
      <button onClick={onSubmitTodo}>Submit</button>
      <div>
        <h3>LIST OF TODO</h3>
        <TodoList todoList={todoList} onSubmitTodo={onSubmitTodo} />
      </div>
    </div>
  );
}

export default Todo;
