import { useState } from 'react';

type Todos = {
  id: number;
  text: string;
};

type TodoArray = {
  todoList: Todos[];
  onEditTodo(id: number, newText: string): void;
};

//when editId is clicked, the UI has to change hence a state
// it needs to change to an input form with a save button

//When a savebutton is clicked, it returns back to button edit
//and remove with the new input

function TodoList({ todoList, onEditTodo }: TodoArray) {
  const [editText, setEditText] = useState('');
  const [editId, setEditId] = useState<null | number>(null);

  function startEdit(id: number, text: string) {
    setEditId(id);
    setEditText(text);
  }

  function saveEdit(id: number) {
    onEditTodo(id, editText);
    setEditId(null);
    setEditText('');
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
                  id="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button
                  onClick={() => {
                    saveEdit(todo.id);
                  }}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <button onClick={() => startEdit(todo.id, todo.text)}>
                  Edit
                </button>
                <button>Remove</button>
              </>
            )}
          </>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
