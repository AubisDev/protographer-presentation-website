import IMG_0 from '../img/IMG_0.jpg'
import IMG_1 from '../img/IMG_1.jpg'
import IMG_2 from '../img/IMG_2.jpg'
import IMG_3 from '../img/IMG_3.jpg'
import IMG_4 from '../img/IMG_4.jpg'
import IMG_5 from '../img/IMG_5.jpg'
import IMG_6 from '../img/IMG_6.jpg'
import IMG_7 from '../img/IMG_7.jpg'
import IMG_8 from '../img/IMG_8.jpg'
import IMG_9 from '../img/IMG_9.jpg'
import IMG_11 from '../img/IMG_11.jpg'
import IMG_12 from '../img/IMG_12.jpg'
import IMG_13 from '../img/IMG_13.jpg'
import IMG_14 from '../img/IMG_14.jpg'
import IMG_15 from '../img/IMG_15.jpg'
import IMG_16 from '../img/IMG_16.jpg'
import IMG_17 from '../img/IMG_17.jpg'
import IMG_18 from '../img/IMG_18.jpg'
import IMG_20 from '../img/IMG_20.jpg'
import IMG_21 from '../img/IMG_21.jpg'
import IMG_22 from '../img/IMG_22.jpg'
import IMG_23 from '../img/IMG_23.jpg'
import IMG_24 from '../img/IMG_24.jpg'
import IMG_25 from '../img/IMG_25.jpg'
import IMG_26 from '../img/IMG_26.jpg'
import IMG_27 from '../img/IMG_27.jpg'
import IMG_28 from '../img/IMG_28.jpg'
import IMG_29 from '../img/IMG_29.jpg'
import IMG_30 from '../img/IMG_30.jpg'
import IMG_31 from '../img/IMG_31.jpg'
import IMG_32 from '../img/IMG_32.jpg'
import IMG_33 from '../img/IMG_33.jpg'
import IMG_35 from '../img/IMG_35.jpg'
import IMG_36 from '../img/IMG_36.jpg'
import IMG_37 from '../img/IMG_37.jpg'
import IMG_38 from '../img/IMG_38.jpg'
import IMG_39 from '../img/IMG_39.jpg'
import IMG_40 from '../img/IMG_40.jpg'
import IMG_41 from '../img/IMG_41.jpg'
import IMG_42 from '../img/IMG_42.jpg'
import IMG_43 from '../img/IMG_43.jpg'
import IMG_44 from '../img/IMG_44.jpg'
import IMG_45 from '../img/IMG_45.jpg'
import IMG_46 from '../img/IMG_46.jpg'
import IMG_47 from '../img/IMG_47.jpg'
import IMG_48 from '../img/IMG_48.jpg'
import IMG_49 from '../img/IMG_49.jpg'
import IMG_50 from '../img/IMG_50.jpg'
import IMG_51 from '../img/IMG_51.jpg'
import IMG_53 from '../img/IMG_53.jpg'

//Set completo de imagenes
const setCompletoImg = [
    IMG_0, IMG_1,IMG_2,IMG_3,IMG_4,IMG_5,IMG_49,IMG_50,
    IMG_6,IMG_7,IMG_8,IMG_9,IMG_11,
    IMG_12,IMG_13,IMG_14,IMG_15,IMG_16,IMG_17,
    IMG_18,IMG_20,IMG_21,IMG_22,IMG_23,
    IMG_24,IMG_25,IMG_26,IMG_27,IMG_28,IMG_29,
    IMG_30,IMG_31,IMG_17,IMG_38,IMG_39,IMG_40,
    IMG_41,IMG_42,IMG_43,IMG_44,IMG_53,IMG_45,IMG_46,
    IMG_47,]

//Set de imagenes de sesiones fotograficas
const setSesiones = [
    IMG_0, IMG_1,IMG_2,IMG_3,IMG_4,IMG_5,
    IMG_6,IMG_7,IMG_8,IMG_9,IMG_11,IMG_49,IMG_50,
    IMG_12,IMG_13,IMG_14,IMG_15,IMG_16,IMG_17,
    IMG_18,IMG_20,IMG_21,IMG_29,IMG_23,
    IMG_24,IMG_25,IMG_26,IMG_27,IMG_30,IMG_28,
];

//Set de imagenes de Paisajes
const setPaisajes = [IMG_38,IMG_39,IMG_40,IMG_41,IMG_42,IMG_43,IMG_44,IMG_45]

//Set de imagenes de Retratos
const setRetratos = [IMG_47,IMG_46,IMG_25,IMG_48, ]

//Set de imagenes de Eventos
const setEventos = [ IMG_32,IMG_33,IMG_35,IMG_36,IMG_37]

export const getAllImages = () => {
    return setCompletoImg
}

export const getHomeImages = () =>{
    return [
        IMG_39,IMG_51,IMG_45,IMG_22,IMG_13
    ]
}


export const FiltrarImagenes = (seccion_filtro) => {
    switch (seccion_filtro) {
        case 'Sesiones' || 'Sesiones Fotograficas':
            return setSesiones;

        case 'Eventos':
            return setEventos;

        case 'Paisajes':
            return setPaisajes;

        case 'Retratos':
            return setRetratos;

        default:
            return setCompletoImg
    }
}