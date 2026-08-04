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

  // if a todo's id is been edited, edit it otherwise return the
  // todo as it is

  function onEditTodo(id: number, newText: string) {
    setTodoList((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)),
    );
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
      <TodoList onEditTodo={onEditTodo} todoList={todoList} />
    </div>
  );
}

export default Todo;
