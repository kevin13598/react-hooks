import React, { useReducer }  from 'react';
import { todoReducer } from './todoReducer';
import { useEffect } from 'react';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

import './styles.css';

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];

}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDelete = (id) => {
        
        dispatch({
            type: 'delete',
            payload: id
        });

    }

    const handleToggle = (id) => {
        dispatch({
            type: 'toggle',
            payload: id
        })
    }

    const handleAddTodo = (newTodo) => {

        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr/>

           <div className="row">

               <div className="col-7">

                    <TodoList 
                        todos={todos} 
                        onDelete={handleDelete} 
                        onToggle={handleToggle} 
                    />

               </div>

               <div className="col-5">
                    <TodoAdd handleAddtodo = {handleAddTodo} />
               </div>

           </div>

        </div>
    )
}
