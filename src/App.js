import React, { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  let [todos, setTodos] = useState([
    {id: 1, completed: false, title: 'Купить хлеб'},
    {id: 2, completed: false, title: 'Купить молоко'},
    {id: 3, completed: false, title: 'Купить масло'},
  ]);

  function markAsDoneOrUndone(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    }));
  }

  return (
    <div className="wrapper">
      <TodoList
          todos={todos}
          markAsDoneOrUndone={markAsDoneOrUndone}
      />
    </div>
  );
}

export default App;
