import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: '30px'
    }
};

function TodoList({ todos, markAsDoneOrUndone }) {


    return (
        <ul style={styles.ul}>
            {
                todos.map(( todo, index ) => {
                    return <TodoItem
                        key={todo.id}
                        todo={todo}
                        index={index}
                        markAsDoneOrUndone={markAsDoneOrUndone}
                    />
                })
            }
        </ul>
    );
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TodoList;
