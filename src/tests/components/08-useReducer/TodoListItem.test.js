const { shallow } = require("enzyme");
const { TodoListItem } = require("../../../components/08-useReducer/TodoListItem");
import {demoTodos} from '../../fixtures/demoTodos';
import React from 'react';
import'@testing-library/jest-dom';

describe('', () => {

    const onDelete = jest.fn();
    const onToggle = jest.fn();

    const wrapper = shallow(
        <TodoListItem 
            todo = {demoTodos[0]}
            index = {0}
            onDelete = {onDelete}
            onToggle = {onToggle}
        />
    );

    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('debe de llamar la función onDelete', () => {

        wrapper.find('button').simulate('click');
        expect(onDelete).toHaveBeenCalledWith(demoTodos[0].id);

    });

    test('debe de llamar la funcion onToggle', () => {

        wrapper.find('p').simulate('click');
        expect(onToggle).toHaveBeenCalledWith(demoTodos[0].id);

    });

    test('debe de mostrar el texto correctamente', () => {

        expect(wrapper.find('p').text()).toBe(`1. ${demoTodos[0].desc}`);
        
    });

    test('debe de tener la clase complete', () => {
        
        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow(
            <TodoListItem 
                todo = {demoTodos[0]}
                index = {0}
                onDelete = {onDelete}
                onToggle = {onToggle}
            />
        );

        expect(wrapper.find('p').hasClass('complete')).toBe(true);

    })
    





})