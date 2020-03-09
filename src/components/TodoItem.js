import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({ todo, index, markAsDoneOrUndone }) {
    return (
        <li>
            <input
                className="input"
                type="checkbox"
                checked={todo.completed}
                onChange={ () => markAsDoneOrUndone(todo.id) }
            />
            <span>
                { index + 1 }. { todo.title }
            </span>
            <button type="button" aria-label='Удалить пункт'>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    markAsDoneOrUndone: PropTypes.func.isRequired
};

export default TodoItem;
