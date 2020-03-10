import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Context from '../context';


function TodoItem({todo, index, markAsDoneOrUndone}) {
    const {removeTodo} = useContext(Context);
    const classes = [];

    if (todo.completed) {
        classes.push('done');
    }

    return (
        <li className={classes.join(' ')}>
            <input
                className="input"
                type="checkbox"
                checked={todo.completed}
                onChange={() => markAsDoneOrUndone(todo.id)}
            />
            <span>
                {index + 1}. {todo.title}
            </span>
            <button
                type="button"
                aria-label='Удалить пункт'
                onClick={() => removeTodo(todo.id)}
            >&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    markAsDoneOrUndone: PropTypes.func.isRequired
};

export default TodoItem;
