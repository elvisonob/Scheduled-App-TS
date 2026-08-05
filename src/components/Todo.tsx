import { ReactEventHandler, useState } from 'react';
import TodoList from './TodoList';

type Todos = {
  id: number;
  text: string;
};

function Todo() {
  const [todoText, setTodoText] = useState('');
  const [todoList, setTodoList] = useState<Todos[]>([]);

  function onChangeTodoText(e: React.ChangeEvent<HTMLInputElement>) {
    setTodoText(e.target.value);
  }

  function onSubmitTodo() {
    setTodoList((prev) => [...prev, { id: Math.random(), text: todoText }]);
    setTodoText('');
  }

  function editTodo(id: number, newText: string) {
    setTodoList((prev) => {
      return prev.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo,
      );
    });
  }

  return (
    <div>
      <h1>TODO APP</h1>
      <h2>ADD TODO</h2>
      <input
        type="text"
        id="text"
        value={todoText}
        onChange={onChangeTodoText}
      />
      <button onClick={onSubmitTodo}>Submit</button>
      <div>
        <TodoList editTodo={editTodo} todoList={todoList} />
      </div>
    </div>
  );
}
export default Todo;
