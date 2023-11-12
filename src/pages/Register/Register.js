import React from 'react';
import './Register.scss';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Footer } from '../../components/Footer/Footer';
import { Button, Checkbox } from '@mui/material';

export const Register = () => {
  return (
    <div>
       <div className='register'>
            <div className='register-mask'>
                
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <label className='register-label'>Registro</label>
                    </div>
                    <div className='info'>
                        <div className='names'>
                            <TextField
                            required
                            id="outlined-password-input"
                            label="Nombre"
                            autoComplete=""
                            className='input'
                            />
                            <TextField
                            required
                            id="outlined-password-input"
                            label="Apellido"
                            autoComplete=""
                            className='input'
                            />
                        </div>
                        <div className='email'>
                            <TextField
                            required
                            id="outlined-password-input"
                            label="Correo"
                            autoComplete=""
                            className='input'
                            />
                            <TextField
                            required
                            id="outlined-password-input"
                            label="Repetir correo"
                            autoComplete=""
                            className='input'
                            />
                        </div>
                        <div className='document'>
                            <TextField
                            required
                            id='outlinded-password-input'
                            label="Documento"
                            autoComplete=''
                            className='input'
                            />
                        </div>
                        <div className='password'>
                            <TextField
                            required
                            id="outlined-password-input"
                            label="Contraseña"
                            type="password"
                            autoComplete="current-password"
                            className='input'
                            />
                            <TextField
                            required
                            id="outlined-password-input"
                            label="Repetir contraseña"
                            type="password"
                            autoComplete="current-password"
                            className='input'
                            />
                        </div>
                        <div className="check-section">
                            <Checkbox />
                            He leido y aceptado las politicas de privacidad y de datos
                    </div>
                    </div>
                    
                    <div className='btn-div-register'>
                        <Button variant="outlined" className='btn-register'>Registrarse</Button>
                    </div>
                </Box>
                {/* <div className='btn-div-register'>
                    <Button variant="outlined" className='btn-register'>Registrarse</Button>
                </div> */}
            </div>
            <Footer className='Footer'/>
        </div>
    </div>
  )
}

