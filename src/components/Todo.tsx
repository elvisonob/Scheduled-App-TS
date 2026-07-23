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
    setTodoList((prev) => {
      return [...prev, { id: Math.random(), text: todoText }];
    });

    setTodoText('');
  }

  function editTodo(id: number, newText: string) {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              text: newText,
            }
          : todo,
      ),
    );
  }

  return (
    <div>
      <h1>TODO APP</h1>
      <h2>ADD TODO</h2>
      <input id="text" value={todoText} onChange={onChangeTodo} />
      <button onClick={onSubmitTodo}>SUBMIT</button>
      <h3>LIST OF TODO</h3>
      <TodoList todoList={todoList} editTodo={editTodo} />
    </div>
  );
}

export default Todo;
