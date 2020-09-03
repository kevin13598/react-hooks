import {TodoApp} from "../../../components/08-useReducer/TodoApp";
import { shallow, mount } from "enzyme";
import React from 'react';
import { demoTodos } from "../../fixtures/demoTodos";
import { act } from "@testing-library/react";

describe('Pruebas en <TodoApp/>', () => {

    const wrapper = shallow(<TodoApp/>);

    Storage.prototype.setItem = jest.fn(() => {});

    test('debe de mostrarse el componente correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('debe de agregar un TODO', () => {
        
        const wrapper = mount(<TodoApp />);

        act( () => {
            wrapper.find('TodoAdd').prop('handleAddtodo')(demoTodos[0]);
            wrapper.find('TodoAdd').prop('handleAddtodo')(demoTodos[1]);
        });

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (2)');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);

    });

    test('debe de eliminar un todo', () => {
        
        act( () => {
            wrapper.find('TodoAdd').prop('handleAddtodo')(demoTodos[0]);
            wrapper.find('TodoList').prop('onDelete')(demoTodos[0].id);
        });
        

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (0)');


    });
    

});