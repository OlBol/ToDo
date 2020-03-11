import React, {useContext, useEffect} from 'react';
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
            <label>
                {index + 1}. {todo.title}
                <input
                    className="input"
                    type="checkbox"
                    aria-label='Отметить пункт как выполненный'
                    checked={todo.completed}
                    onChange={() => markAsDoneOrUndone(todo.id)}
                />
            </label>
            <button
                className='del'
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
