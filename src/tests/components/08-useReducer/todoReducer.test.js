import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import {demoTodos} from '../../fixtures/demoTodos';



describe('Pruebas en todoReducer', () => {

    test('debe de retornar el estado por defecto', () => {
        
        const state = todoReducer(demoTodos, {});

        expect(state).toEqual(demoTodos);

    });

    test('debe de agregar un TODO', () => {

        const newTodo = {
            id: 2,
            desc:'Aprender Express',
            done: false
        }
        
        const agregarTodoAction = {
            type: 'add',
            payload: newTodo
        }
        
        
        const state = todoReducer(demoTodos, agregarTodoAction);
        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos, newTodo]);

    });

    test('debe de borrar un TODO', () => {
        
        const deleteTodo = {
            type: 'delete',
            payload: 2
        }

        const state = todoReducer(demoTodos, deleteTodo);
        expect(state.length).toBe(1);
    });

    test('debe de hacer el TOGGLE del TODO', () => {
        
        const toggleTodo = {
            type: 'toggle',
            payload: 1
        }

        const state = todoReducer(demoTodos, toggleTodo);
        expect(state[0].done).toBe(true);
        expect(state[1]).toEqual(demoTodos[1]);


    })
    
    
    
});