import React from 'react'
import './MenuUser.scss';
import UamLogo from '../../assets/img/logo-removebg-preview.png';
import Avatar from '../../assets/img/avatar.png';
import { Link, animateScroll as scroll } from "react-scroll";
import{ Grid } from '@mui/material';


export const MenuUser = () => {
    const burguer = () => {
        const toggle = document.getElementById('toggle');
        const items = document.getElementById('items');
        const login = document.getElementById('login');
        items.classList.toggle('open');
        login.classList.toggle('open');
        toggle.classList.toggle('close');
    }
    const cancel = () => {
        console.log('Di clock en login');
        window.location.href = '/login';
    }
    return (
        <div class="container">
            <Grid container spacing={0}>
                <Grid item xs={6} md={12}>
                    <div class="menu" id="menu">
                        <Grid container spacing={0}>
                            <Grid item xs={0} md={1}>
                                <img src={UamLogo} alt="Logo UAM" class="uam"/>
                            </Grid>
                            <div class="toggle" id="toggle" onClick={burguer}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <Grid item xs={6} md={7}>
                                <label className='Raquets'>RaquetRush</label>
                            </Grid>
                            <Grid item xs={6} md={7}>
                                <div className='menu-links'>
                                    <ul id='items'>
                                        <li>
                                            <Link
                                                activeClass="active"
                                                to="Section1"
                                                spy={true}
                                                smooth={true}
                                                offset={-50}
                                                duration={500}
                                            >
                                                Products
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                activeClass="active"
                                                to="Section2"
                                                spy={true}
                                                smooth={true}
                                                offset={-50}
                                                duration={500}
                                            >
                                                Cart and Favorites
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                activeClass="active"
                                                to="Section3"
                                                spy={true}
                                                smooth={true}
                                                offset={-50}
                                                duration={500}
                                            >
                                                More
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Grid>
                            <Grid item xs={6} md={1}>
                                <div className='cancel-menu'>
                                    <Link onClick={cancel} className='cancel-a' id='cancel'>Cancelar cuenta</Link>
                                </div>
                            </Grid>
                            <Grid item xs={3} md={1}>
                                <div className='avatar-container'>
                                    <img src={Avatar} alt="foto de perfil" class="avatar"/>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}


