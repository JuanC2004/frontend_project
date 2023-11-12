import React, { useState } from 'react'
import './Section1.scss';
import { useLocation } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images_notice } from '../../../assets';
import SliderComponent from '../../Slider/Slider';

export const Section1 = () => {
    const location = useLocation();
    const shouldHide = location.pathname === '/flexbox';
    
    /* const images = Array.isArray(images_notice) ? images_notice : []; */
    const noticias = [
        {
            _id : '1',
            title : ' WILSON PRO STAFF 97 V.13',
            subtitle: 'Te presentamos la raqueta profesional diseñada por uno de los mejores tenistas que ha visto el planeta, Roger Federer ',
            description: 'Codiseñada por Roger Federer, el Pro Staff ofrece la sensación pura y clásica que los jugadores han llegado a amar, pero con un diseño completamente nuevo rinde homenaje a la histórica serie Pro Staff, presenta una nueva construcción Braid 45 que aumenta la precisión al ajustar el ángulo de las fibras trenzadas dobles para mejorar la sensación y la estabilidad.',
            image: images_notice.notice1
        },
        {
            _id : '2',
            title : 'BABOLAT PURE AERO RAFA',
            subtitle: 'Una raqueta unica, usada por la leyenda española Rafael Nadal',
            description: 'Si luchas por cada punto con la misma entrega que Rafa, tu ídolo, la raqueta de tenis Pure Aero Rafa de segunda generación es lo que estás buscando. Más radiante y enérgica, el diseño de esta raqueta, específico para Rafa, se ha realizado en su totalidad con su colaboración directa.',
            image: images_notice.notice2
        },
        {
            _id : '3',
            title : 'HEAD BOOM PRO 2022',
            subtitle: 'Para los amantes de la extravagancia y el juego elegante, la revolución en el deporte blanco de la mano de HEAD',
            description: 'La nueva BOOM PRO combina potencia explosiva, un tacto sensacional y la innovadora estructura Auxetic. Podrás competir mientras disfrutas del partido. Hecha para jugadores de torneos de nivel avanzado y con una nueva forma diseñada para HEAD, la BOOM PRO te dará ese plus de estabilidad y peso que buscas, y activará todo tu poder y confianza.',
            image: images_notice.notice3
        },
        {
            _id : '4',
            title : 'ARTENGO TR960',
            subtitle: 'Raqueta para los que les gusta llamar la atención con jugadas unicas, llamativas y puntos dignos de recordar toda la vida, al estilo del frances Gael Monfils',
            description: 'Esta raqueta ademas de darte estatus dentro del campo, te brinda un mejor control en tus golpes, sin comprometer la potencia y tecnica, sin omitir el estilo y la extravagancia que se puede tener con esta raqueta',
            image: images_notice.notice4
        },
    ]
    return (
        <div className={shouldHide ? 'hidden' : ''}>
            {/* Contenido de Section1 */}
            <div class="Section1">
                <SliderComponent noticias={noticias}/>
            </div>
        </div>
        
    )
}
