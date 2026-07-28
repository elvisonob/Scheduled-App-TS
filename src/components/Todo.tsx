import { useState } from 'react';
import TodoList from './TodoList';

type Todo = {
  id: number;
  text: string;
};

function Todo() {
  const [todoText, setTodoText] = useState('');
  const [todoList, setTodoList] = useState<Todo[]>([]);

  function onChangeTodo(e: React.ChangeEvent<HTMLInputElement>) {
    setTodoText(e.target.value);
  }

  function onSubmitTodo() {
    setTodoList((prev) => {
      return [...prev, { id: Math.random(), text: todoText }];
    });

    console.log(todoText);
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
        <TodoList />
      </div>
    </div>
  );
}

export default Todo;
