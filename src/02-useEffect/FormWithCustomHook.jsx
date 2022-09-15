import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });



    return (
        <>
            <h1>Formulario con custom hook</h1>
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

            <input 
                type="password" 
                placeholder="Contraseña"
                className="form-control mt-2"
                name="password"
                value={ password }
                onChange={ onInputChange }
            />

            <button className="btn btn-primary mt-2" onClick={ onResetForm }>Borrar</button>
        </>
    );
}
