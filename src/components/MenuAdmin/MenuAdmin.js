import React from 'react'
import './MenuAdmin.scss';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import UamLogo from '../../assets/img/logo-removebg-preview.png';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';


export const MenuAdmin = () => {
    const [isOpen, setIsOpen] = useState(true);


    const toggle = () => {


        const menuItems = [
            {
                path: '/admin',
                name: 'Dashboard',
                icon: <HomeIcon/>
            },
            {
                path: '/admin/users',
                name: 'Usuarions',
                icon: <GroupIcon/>
            },
        ]
        return (
            <div className='container'>
                <div style={{width: isOpen ? "200px": "50px"}} className='sidebar'>
                    <div className='top'>
                        <img src={UamLogo} alt="UAM Logo" className='logo' style={{display: isOpen ? "block" : "none"}}/>
                        <div className='bars' style={{marginLeft: isOpen ? "10px": "0px"}}>
                            <MenuIcon onClick={toggle}/>
                        </div>
                    </div>
                    {
                        menuItems.map((item, index)=>(
                            <NavLink to={item.path} key={index} activeclassName="active" className="link">
                                <div className='icon'>
                                    {item.icon}
                                </div>
                                <div className='link-text' style={{display: isOpen ? "block" : 'none'}}>
                                    {item.name}
                                </div>
                            </NavLink>
                        ))
                    }
                </div>

            </div>
        )
    }
    
}

export default MenuAdmin
