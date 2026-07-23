import { useState } from 'react';

type TodoContent = {
  id: number;
  text: string;
};
type Todos = {
  todoList: TodoContent[];
  editTodo: (id: number, text: string) => void;
};

function TodoList({ todoList, editTodo }: Todos) {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState('');

  function startEditing(id: number) {
    setEditingId(id);
  }

  return <div></div>;
}

export default TodoList;
