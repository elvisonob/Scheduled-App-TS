import { useState } from 'react';

type Todos = {
  id: number;
  text: string;
};

type TodoArray = {
  todoList: Todos[];
};

//when editId is clicked, the UI has to change hence a state
// it needs to change to an input form with a save button

function TodoList({ todoList }: TodoArray) {
  const [editText, setEditText] = useState('');
  const [editId, setEditId] = useState<null | number>(null);

  function startEdit(id: number) {
    setEditId(id);
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
                <button>Save</button>
              </>
            ) : (
              <>
                <button onClick={() => startEdit(todo.id)}>Edit</button>
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
