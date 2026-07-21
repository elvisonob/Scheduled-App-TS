import { useState } from 'react';

type todos = {
  id: number;
  text: string;
};

type TodoProps = {
  todoList: todos[];
  onRemoveTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
};

function TodoList({ todoList, onRemoveTodo, editTodo }: TodoProps) {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState('');

  function startEditing(id: number) {
    setEditingId(id);
  }

  function saveEditing(id: number) {
    editTodo(id, editingText);
    setEditingId(null);

    setEditingText('');
  }

  return (
    <div>
      <ul>
        {todoList.map((todo) => {
          return (
            <div key={todo.id}>
              {editingId === todo.id ? (
                <>
                  <input
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                  />
                  <button onClick={() => saveEditing(todo.id)}>Save</button>
                </>
              ) : (
                <>
                  <li>{todo.text}</li>
                  <button onClick={() => onRemoveTodo(todo.id)}>Remove</button>
                  <button onClick={() => startEditing(todo.id)}>Edit</button>
                </>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
