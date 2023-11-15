import React from 'react';
import './NoVerify.scss';
import { Button } from '@mui/material';

export const NoVerify = () => {
    const login = () => {
        window.location.href = '/login'
    }

    return (
        <div className='no-verify'>
            <h1 className='no-verify__title'>ERROR</h1>
            <h3 className='no-verify__title'>No se ha hecho verificación de la cuenta</h3>
            <h3 className='no-verify__title'>Revisar el email o los mensajes de texto</h3>
            <Button variant='contained' className='btn-noverify' onClick={login}>Aceptar</Button>
        </div>
    )
}

