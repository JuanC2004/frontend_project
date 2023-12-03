import './Footer.scss'
import React from 'react'
import {Link} from 'react-router-dom'
import Location from '../../assets/svg/location-1-svgrepo-com.svg'
import Twitter from '../../assets/svg/twitter-2-svgrepo-com.svg'
import Facebook from '../../assets/svg/facebook-svgrepo-com.svg'
import Instagram from '../../assets/svg/instagram-round-svgrepo-com.svg'
import Linkedin from '../../assets/svg/linkedin-round-svgrepo-com.svg'
import RRLOGOG from '../../assets/svg/tennis-svgrepo-com.svg'
import Contact from '../../assets/svg/whatsapp-whats-app-svgrepo-com.svg'
import { Grid } from '@mui/material'


export const Footer = () => {
    const privacy = () => {
        console.log('Di click en privacidad');
        window.open('../Privacy','_self')
    }
    const pqrsf = () => {
        console.log('Di click en PQRSF');
        window.open('../Pqrsf','_self')
    }

    const location = () => {
        console.log('Di click en ubicación');
        window.open('https://maps.app.goo.gl/b3FMmEnVHhZPtwmy6', '_blank');
    }

    const contact = () => {
        console.log('Di click en contactanos');
        window.open('https://wa.me/573017457749?text=Hola!!,%20Quisiera%20una%20asesor%C3%ADa%20con%20Raquet%20Rush%20', '_blank');
    }

    const instagram = () => {
        console.log('Di click en instagram');
        window.open('https://msng.link/o?juanca_quintero_hurtado=ig','_blank');
    }
    const facebook = () => {
        console.log('Di click en facebook');
        window.open('https://m.facebook.com/juancamilo.quinterohurtado.73?mibextid=2JQ9oc','_blank');
    }
    const linkedin = () => {
        console.log('Di click en linkedin');
        window.open('https://www.linkedin.com/in/juan-camilo-quintero-hurtado','_blank');
    }
    const twitter = () => {
        console.log('Di click en twitter');
        window.open('https://twitter.com/RaquetRush','_blank');
    }

    return (
        <div className='Footer'>
            <div className='card'>
                <div className = 'Location'>
                    <label>Ubicación y contacto:</label>
                    <img src={Location} alt="Location" className='Svg' style={{color: '#ECEEF3'}} onClick={location}/>
                    <img src={Contact} alt="Contact" className='Svg' onClick={contact}/>
                </div>
                <div className='SocialMedia'>
                    <label>Redes sociales:</label>
                    <Grid container spacing={1}>
                        <Grid item xs={6} md={3}>
                            <img src={Instagram} alt='Instagram' className='Svg' onClick={instagram}/>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <img src={Facebook} alt='Facebook' className='Facebook' onClick={facebook}/>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <img src={Linkedin} alt='Linkedin' className='Svg' onClick={linkedin}/>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <img src={Twitter} alt='Twitter' className='Svg' onClick={twitter}/>
                        </Grid>
                    </Grid>
                </div>
                <div className='Privacy'>
                    <img src = {RRLOGOG} alt="UamLogo" className='Logo'/>
                    <div className='conf-button'>
                        <label className="privacy-button" onClick={privacy}>
                            Politica de privacidad y de datos
                        </label>
                        <label className="Pqrsf-button" onClick={pqrsf}>
                            PQRSF
                        </label>
                    </div>
                </div>    
            </div>
        </div>
    )
}

