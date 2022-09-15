import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username: 'usuario1',
        email: 'nombre@google.com'
    });

    const { username, email } = formState; 

    const onInputChange = ( { target } ) => {
        const { name, value } = target;
        setformState({
            ...formState,
            [ name ]: value
        });
    }

    useEffect( () => {

    }, []);

    useEffect( () => {
        
    }, [formState]);

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />
            <input 
                type="text" 
                placeholder="Username"
                className="form-control"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />

            <input 
                type="text" 
                placeholder="example@google.com"
                className="form-control mt-2"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />

            {
                (username === 'strider2') && <Message />
            }
        </>
    );
}
