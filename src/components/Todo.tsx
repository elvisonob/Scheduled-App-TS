import { useState } from 'react';
import TodoList from './TodoList';

type Todos = {
  id: number;
  text: string;
};

function Todo() {
  const [todoList, setTodoList] = useState('');
  const [todos, setTodos] = useState<Todos[]>([]);

  const onHandleTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoList(e.target.value);
  };

  const onSubmitTodo = () => {
    if (!todoList.trim()) return;

    setTodos((prev) => [...prev, { id: Math.random(), text: todoList }]);
    setTodoList('');
  };

  function removeTodo(id: number) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function onEditTodo(id: number, newText: string) {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)),
    );
  }

  return (
    <div>
      <h1>TODO APP</h1>
      <input
        type="text"
        name="todoText"
        value={todoList}
        onChange={onHandleTodo}
      />
      <button onClick={onSubmitTodo}>ADD TODO</button>
      <TodoList removeTodo={removeTodo} onEditTodo={onEditTodo} todos={todos} />
    </div>
  );
}

export default Todo;
