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
    setTodoList((prev) => [...prev, { id: Math.random(), text: todoText }]);
    setTodoText('');
  }

  function onRemoveTodo(id: number) {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
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
      <input id="todo" type="text" value={todoText} onChange={onChangeTodo} />
      <button onClick={() => onSubmitTodo()}>Submit</button>
      <div>
        <h3>LIST OF TODO</h3>
        <TodoList
          onRemoveTodo={onRemoveTodo}
          editTodo={editTodo}
          todoList={todoList}
        />
      </div>
    </div>
  );
}

export default Todo;
