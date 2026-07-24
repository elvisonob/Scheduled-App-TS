import { useState } from 'react';

type TodoContent = {
  id: number;
  text: string;
};
type Todos = {
  todoList: TodoContent[];
  editTodo: (id: number, newText: string) => void;
  removeTodo: (id: number) => void;
};

function TodoList({ todoList, editTodo, removeTodo }: Todos) {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState('');

  function startEditing(id: number, text: string) {
    setEditingId(id);
    setEditText(text);
  }

  function saveEditing(id: number) {
    setEditingId(null);
    editTodo(id, editText);
    setEditText('');
  }

  return (
    <div>
      <ul>
        {todoList.map((todo) => (
          <>
            <li key={todo.id}>
              {editingId === todo.id ? (
                <>
                  <input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <button onClick={() => saveEditing(todo.id)}>Saved</button>
                </>
              ) : (
                <>
                  {todo.text}
                  <button onClick={() => startEditing(todo.id, todo.text)}>
                    Edit
                  </button>
                  <button onClick={() => removeTodo(todo.id)}>Remove</button>
                </>
              )}
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
