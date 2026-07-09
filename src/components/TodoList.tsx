type Todos = {
  id: number;
  text: string;
};

type TodoListProps = {
  todos: Todos[];
  removeTodo: (id: number) => void;
};

function TodoList({ todos, removeTodo }: TodoListProps) {
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
            <button>Edit</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
