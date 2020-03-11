import React, {useState, useEffect} from 'react';
import TodoList from './components/TodoList';
import Context from './context';
import AddTodo from './components/AddTodo';
import Loader from './components/Loader';

function App() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos => {
                setTimeout(() => {
                    setTodos(todos);
                    setLoading(false);
                }, 2000);
            });
    }, []);


    function markAsDoneOrUndone(id) {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }

            return todo;
        }));
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    function addTodo(title) {
        setTodos(todos.concat([{
            id: Date.now(),
            completed: false,
            title
        }]));
    }

    return (
        <div className='wrapper'>
            <h1>Todo list</h1>
            <AddTodo onCreate={addTodo}/>
            <Context.Provider value={{removeTodo}}>
                {/*<div className="contsiner">*/}
                    {loading && <Loader/>}
                    {todos.length ? (
                        <TodoList todos={todos} markAsDoneOrUndone={markAsDoneOrUndone}/>
                    ) : loading ? null : (
                        <div>Нет запланированных дел</div>
                    )}
                {/*</div>*/}
            </Context.Provider>
        </div>
    );
}

export default App;
