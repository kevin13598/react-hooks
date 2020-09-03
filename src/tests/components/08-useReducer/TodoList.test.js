import React from 'react';
import { shallow } from 'enzyme';
import { demoTodos } from '../../fixtures/demoTodos';
import { TodoList } from '../../../components/08-useReducer/TodoList';

describe('Pruebas en <TodoList />', () => {

   const onDelete = jest.fn();
   const onToggle = jest.fn();

   
    const wrapper = shallow(
        <TodoList 
            todos = {demoTodos}
            onDelete = {onDelete}
            onToggle = {onToggle}
        />
    );

    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });
    
    test('debe de tener dos <TodoListItem/>', () => {

        expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);

        expect(wrapper.find('TodoListItem').at(0).prop('onDelete')).toEqual(expect.any(Function));

    });
});