import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name:'',
        email:''
    });

    const {name, email} = formState;
    
    useEffect( () => {
        //console.log('hey!');
    }, []); //cuando se carga el componente

    useEffect( () => {
        //console.log('formState cambió');
    }, [formState]); //cunado se cambia el form

    useEffect( () => {
        //console.log('email cambió');
    }, [email]); //cuando cambia solo el email


    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr/>

            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                    />
            </div>


            <div className="form-group">
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                    />
            </div>

            {(name === '123') && <Message/>}

        </>
    )
}
