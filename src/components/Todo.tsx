import { useState } from 'react';

function Todo() {
  const [todoList, setTodoList] = useState('');

  const onHandleTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoList(e.target.value);
  };

  const onSubmitTodo = () => {
    console.log(todoList);
    setTodoList('');
  };
  return (
    <div>
      <h1>TODO APP</h1>
      <input
        type="text"
        name="todoText"
        value={todoList}
        onChange={onHandleTodo}
      />
      <button onClick={onSubmitTodo}>ADD TODO</button>
    </div>
  );
}

export default Todo;
