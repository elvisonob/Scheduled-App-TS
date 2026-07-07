type Todos = {
  id: number;
  text: string;
};

type TodoListProps = {
  todos: Todos[];
  removeTodo: (id: number) => void;
  onEdit: (id: React.ChangeEvent<HTMLInputElement>) => void;
};

function TodoList({ todos, removeTodo, onEdit }: TodoListProps) {
  return (
    <div>
      <h2>LIST OF TODOS</h2>
      <ul>
        {todos.map((todo) => (
          <div key={todo.id}>
            <li>{todo.text}</li>
            <button
              onClick={() => {
                removeTodo(todo.id);
              }}
            >
              Remove
            </button>
            <button onClick={onEdit(todo.id)}>Edit</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
