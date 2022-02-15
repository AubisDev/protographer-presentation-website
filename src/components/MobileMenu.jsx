import React from 'react'
import { getEventImages, getPaisajeImages, getPersonImages, getWeddingImages } from './getImages'

const MobileMenu = ({ setMenuActual, setPictures, setOpenResposiveMenu, setActualPage }) => {

    const colocarFotos = ( seleccion ) => {
        setMenuActual(seleccion);
        setOpenResposiveMenu(false)
        if(seleccion === 'sesiones'){
            setActualPage(0)
            setPictures( getPersonImages() );
        }
        else if(seleccion === 'eventos'){
            setActualPage(0)
            setPictures( getEventImages() );
        }
        else if(seleccion === 'paisajes'){
            setActualPage(0)
            setPictures( getPaisajeImages() );
        }
        else if(seleccion === 'bodas'){
            setActualPage(0)
            setPictures( getWeddingImages() );
        }
        
    }

    return (
        <div className='absolute h-screen sm:w-1/2 w-full  bg-black/90 animate__animated animate__fadeInLeft z-[100]'> 
            <div className='w-full h-full flex justify-center items-center text-center'>
                <button 
                    className='text-white absolute top-0 right-0'
                    onClick= { () => setOpenResposiveMenu( false ) }
                >
                        <i className="fas fa-times text-3xl p-3 mr-2"></i>
                </button>
                <ul className='text-white text-2xl'>
                    <li><button className='p-2 hover:bg-green-600/60  rounded-md w-full z-[100]' onClick={() => colocarFotos('eventos')}>Eventos</button></li>
                    <li><button className='p-2 hover:bg-green-600/60 rounded-md w-full z-[100]' onClick={() => colocarFotos('bodas')}>Bodas</button></li>
                    <li><button className='p-2 hover:bg-green-600/60 rounded-md w-full z-[100]' onClick={() => colocarFotos('sesiones')}>Sesiones fotograficas</button></li>
                    <li><button className='p-2 hover:bg-green-600/60 rounded-md w-full z-[100]' onClick={() => colocarFotos('paisajes')}>Paisajes</button></li>
                </ul>
            </div>
        </div>
    )
}

export default MobileMenu
