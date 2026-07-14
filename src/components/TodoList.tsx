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
  const [editText, setEditText] = useState<string>('');

  function startEditing(id: number, text: string) {
    setEditingId(id);
    setEditText(text);
  }

  function saveEdit(id: number, text: string) {
    onEditTodo(id, text);
    setEditingId(null);
    setEditText('');
  }

  // if an edit button is clicked, the input dialog box should open up
  // and then we have the save button showing
  // after editing is done, the save button is clicked
  // new update takes shape

  return (
    <div>
      <h2>LIST OF TODOS</h2>
      <ul>
        {todos.map((todo) => (
        {editingId === todo.id? <input value={editText} onChange={(e)=> setEditText(e.target.value)}/>}


          <li>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
