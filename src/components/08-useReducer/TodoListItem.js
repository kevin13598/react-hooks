import React from 'react';

export const TodoListItem = ({todo, index, onToggle, onDelete}) => {

    return (
        <li
            key={todo.id}
            className="list-group-item"
        >
            <p 
                className={`${todo.done && 'complete'}`}
                onClick= {() => onToggle(todo.id)}
            >
                {index+1}. {todo.desc}
            </p>

            <button
                className="btn btn-danger"
                onClick = {() => onDelete(todo.id)}
            >
                Borrar
            </button>
    </li>                     
    )
}
