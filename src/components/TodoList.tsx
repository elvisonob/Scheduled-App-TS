import { useState } from 'react';

type Todos = {
  id: number;
  text: string;
};

type TodoListProps = {
  todos: Todos[];
  removeTodo: (id: number) => void;
  onEditTodo: (id: number, newText: string) => void;
};

function TodoList({ todos, removeTodo, onEditTodo }: TodoListProps) {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState<string>('');

  function startEditing(id: number, text: string) {
    setEditingId(id);
    setEditText(text);
  }

  function saveEdit(id: number) {
    onEditTodo(id, editText);
    setEditingId(null);
    setEditText('');
  }

  // if edit button is clicked, the button should
  // change to save and there should be an input box,
  // and when save is clicked edit and remove button
  // should show up and the next text

  return (
    <div>
      <h2>LIST OF TODOS</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editingId === todo.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => saveEdit(todo.id)}>Save</button>
              </>
            ) : (
              <>
                <div>{todo.text}</div>
                <button onClick={() => removeTodo(todo.id)}>Remove</button>

                <button onClick={() => startEditing(todo.id, todo.text)}>
                  Edit
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
