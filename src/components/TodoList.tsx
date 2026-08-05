import { useState } from 'react';

type Todos = {
  id: number;
  text: string;
};

type TodoListProps = {
  todoList: Todos[];
  editTodo: (id: number, text: string) => void;
  removeTodo: (id: number) => void;
};

function TodoList({ todoList, editTodo, removeTodo }: TodoListProps) {
  const [editId, setEditId] = useState<null | number>(null);
  const [editText, setEditText] = useState('');

  function startEdit(id: number, text: string) {
    setEditId(id);
    setEditText(text);
  }

  function saveEdit(id: number) {
    editTodo(id, editText);
    setEditId(null);
  }

  return (
    <div>
      <h3>LIST OF TODO</h3>
      <ul>
        {todoList.map((todo) => (
          <>
            <li key={todo.id}>{todo.text}</li>
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  id="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => saveEdit(todo.id)}>Save</button>
              </>
            ) : (
              <>
                <button onClick={() => startEdit(todo.id, todo.text)}>
                  Edit
                </button>
                <button onClick={() => removeTodo(todo.id)}>Remove</button>
              </>
            )}
          </>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
