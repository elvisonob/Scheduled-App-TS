import { useState } from 'react';
import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAddTodoHandler = (textInput: string) => {
    const newTodo = new Todo(textInput);

    setTodos((prevTodo) => {
      return [newTodo, ...prevTodo];
    });
  };

  return (
    <div>
      <NewTodo onAddText={onAddTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
