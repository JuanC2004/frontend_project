import React, { useState } from 'react';
import "./Pqrsf.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Footer } from "../../components/Footer/Footer";
import { Button } from "@mui/material";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Autocomplete from '@mui/material/Autocomplete';

export const Pqrsf = () => {
    const [selectedClient, setSelectedClient] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const clients = [
        { label: 'Persona natural' },
        { label: 'Persona jurídica' },
    ];

    const documentTypeOptions = selectedClient?.label === 'Persona jurídica'
        ? [{ label: 'NIT' }]
        : [
            { label: 'C.C' },
            { label: 'T.I' },
            { label: 'Pasaporte' },
            { label: 'Cédula extranjera' },
        ];

    const types = [
        { label: 'Pregunta' },
        { label: 'Queja' },
        { label: 'Reclamo' },
        { label: 'Sugerencia' },
        { label: 'Felicitación' },
    ];

    const handleSendButtonClick = () => {
        // Aquí puedes realizar la lógica de envío de la petición
        // y luego mostrar el mensaje de éxito
        // Puedes simularlo con un setTimeout como ejemplo
        // Solo para propósitos demostrativos
        setSuccessMessage('¡Petición enviada exitosamente!');
        setTimeout(() => {
            setSuccessMessage('');
        }, 3000); // Oculta el mensaje después de 3 segundos
    };

    return (
        <div>
            <div className='pqrsf'>
                <div className='pqrsf-mask'>
                    <div>
                        <label className="pqrsf-label">Formulario PQRSF</label>
                    </div>
                    <div className='info'>
                        <div className='client-type'>
                            <Autocomplete
                                disablePortal
                                className='combo-box'
                                id="combo-box-demo"
                                options={clients}
                                getOptionLabel={(option) => option.label}
                                onChange={(event, newValue) => setSelectedClient(newValue)}
                                renderInput={(params) => <TextField {...params} label="Tipo de persona" />}
                            />
                        </div>
                        <div className='document'>
                            <Autocomplete
                                disablePortal
                                className='combo-box'
                                id="combo-box-demo"
                                options={documentTypeOptions}
                                getOptionLabel={(option) => option.label}
                                renderInput={(params) => <TextField {...params} label="Tipo de documento" />}
                            />
                            <TextField
                                required
                                id="outlined-password-input"
                                label="Documento"
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
                        </div>
                        <div className='number'>
                            <TextField
                                required
                                id="outlined-password-input"
                                label="Numero de telefono"
                                autoComplete=""
                                className='input'
                            />
                        </div>
                        <div className='type'>
                            <Autocomplete
                                disablePortal
                                className='combo-box'
                                id="combo-box-demo"
                                options={types}
                                getOptionLabel={(option) => option.label}
                                renderInput={(params) => <TextField {...params} label="Tipo de petición" />}
                            />
                        </div>
                        <div className='rich-text'>
                            <CKEditor
                                editor={ClassicEditor}
                                data="<p></p>"
                                onReady={(editor) => {
                                    const data = editor.getData();
                                    console.log({ editor, data });
                                }}
                            />
                        </div>
                        <div className='btn-div-send'>
                            <Button
                                variant="outlined"
                                className='btn-send'
                                onClick={handleSendButtonClick}
                            >
                                Enviar
                            </Button>
                            {successMessage && (
                                <div className="success-message">{successMessage}</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
