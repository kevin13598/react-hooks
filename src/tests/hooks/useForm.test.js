import {renderHook, act} from "@testing-library/react-hooks";
import {useForm} from '../../hooks/useForm';

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'kevin',
        email: 'fernando@gmail.com'
    };

    test('debe de regresar un formulario por defecto', () => {
        
        const {result} = renderHook( () => useForm(initialForm));
        const [values, handleInputChange, reset] = result.current;
        
        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');

    });

    test('debe de cambiar el valor del formulario (cambiar name)', () => {

        const {result} = renderHook( () => useForm(initialForm));
        const [form, handleInputChange] = result.current;

        act( () => {

            handleInputChange({
                target:{
                    name:'name',
                    value: 'NO Kevin'
                }
            });
        });

        const [formValues] = result.current;

        expect(formValues).toEqual({...initialForm, name:'NO Kevin'});


    });

    test('debe de re-establecer el formulario con reset', () => {
        
        const {result} = renderHook( () => useForm(initialForm));
        const [form, handleInputChange, reset] = result.current;

        act( () => {

            handleInputChange({
                target:{
                    name:'name',
                    value: 'NO Kevin'
                }
            });

            reset();
        });

        const [formValues] = result.current;

        expect(formValues).toEqual(initialForm);

    });

});