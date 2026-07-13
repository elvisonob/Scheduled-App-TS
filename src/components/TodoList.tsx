import { useState } from 'react';

type Todos = {
  id: number;
  text: string;
};

type TodoListProps = {
  todos: Todos[];
  removeTodo: (id: number) => void;
  onEditTodo: (id: number, text: string) => void;
};

function TodoList({ todos, removeTodo, onEditTodo }: TodoListProps) {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState('');

  return (
    <div>
      <h2>LIST OF TODOS</h2>
      <ul>
        {todos.map((todo) => (
          <li>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
