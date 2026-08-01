import { useState } from 'react';

type Todo = {
  id: number;
  text: string;
};

type TodoProps = {
  todoList: Todo[];
  onSubmitTodo: (id: number, text: string) => void;
};

function TodoList({ todoList, onSubmitTodo }: TodoProps) {
  const [editingText, setEditingText] = useState('');
  const [editId, setEditId] = useState<number | null>(null);

  function startEdit(id: number, text: string) {
    setEditId(id);
    setEditingText(text);
  }

  function saveEdit(id: number) {
    onSubmitTodo(id, editingText);
    setEditId(null);
    setEditingText('');
  }
  return (
    <div>
      <ul>
        {todoList.map((todo) => (
          <>
            <li key={todo.id}>
              {editId === todo.id ? (
                <>
                  <input
                    id="text"
                    value={editingText}
                    type="text"
                    onChange={(e) => setEditingText(e.target.value)}
                  />
                  <button onClick={() => saveEdit(todo.id)}>Save</button>
                </>
              ) : (
                <>
                  {todo.text}
                  <button onClick={() => startEdit(todo.id, todo.text)}>
                    Edits
                  </button>
                  <button>Remove</button>
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
