import React, { useState } from 'react';
import './Home.scss';
import { Cube } from '../../components/Cube/Cube';
import { MenuCube } from '../../components/Menu/MenuCube';
import { Section1 } from '../../components/Sections/Section1/Section1';
import { Section2 } from '../../components/Sections/Section2/Section2';
import { Section3 } from '../../components/Sections/Section3/Section3';
import { LateralMenu } from '../../components/LateralMenu/LateralMenu';
import { TraslucentMenu } from '../../components/TraslucentMenu/TraslucentMenu';
import {Footer} from '../../components/Footer/Footer'

export const Home = () => {
    return (
        <div className="Home">
            <div className='Content'>
                <Cube />
                <MenuCube />
                {/* <TraslucentMenu/> */}
                <Section1/>
                <Section2 />
                <Section3/>
                <LateralMenu/>
               {/*  <img src={Background} className='background'></img> */}
            </div>
                <Footer/>
        </div>
        
    )
}

