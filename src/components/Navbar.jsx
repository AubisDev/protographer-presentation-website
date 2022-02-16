import React, { useEffect, useState } from 'react'
import weddingIcon from '../img/wedding-icon.png'
import { getEventImages, getPaisajeImages, getPersonImages, getWeddingImages } from './getImages'
import { useMediaQuery } from 'react-responsive';

export const Navbar = ({  setMenuActual, setPictures, openResposiveMenu, setOpenResposiveMenu, setActualPage}) => {

    const [activateMenu, setActivateMenu] = useState(false)
    const mobile = useMediaQuery({ query: '(max-width: 1000px)' })
    const smallScreen = useMediaQuery({ query: '(max-width: 1023px)' });
    const [toggleContact, setToggleContact] = useState(false)

    useEffect(() => {
        if ( !mobile && openResposiveMenu ){
            setOpenResposiveMenu( !openResposiveMenu )
            setActivateMenu( !activateMenu )
        }
        if( activateMenu && mobile ){
            setActivateMenu( !activateMenu )
            setOpenResposiveMenu( !openResposiveMenu )
        }
    }, [mobile])

    const menuActive = () => {
        (!mobile && !openResposiveMenu) ?  setActivateMenu( !activateMenu ) : setOpenResposiveMenu( !openResposiveMenu )  ;
    }

    const colocarFotos = ( seleccion ) => {
        setMenuActual(seleccion)
        if(seleccion === 'sesiones'){
            setPictures( getPersonImages() );
        }
        else if(seleccion === 'eventos'){
            setPictures( getEventImages() );
        }
        else if(seleccion === 'paisajes'){
            setPictures( getPaisajeImages() );
        }
        else if(seleccion === 'bodas'){
            setPictures( getWeddingImages() );
        }
    }
    
    const handleToggleContact = () => {
        setToggleContact( !toggleContact);
    }

    let menuClass = activateMenu ? `rotate-180 transition duration-500 lg:my-8 ` : 'animate__animated animate__fadeIn animate__slower'; 

    return (
        <div className='w-4/5 h-full font-tmodel2 flex lg:flex-col m-auto'>
            <div className='w-full h-full flex flex-row lg:flex-col justify-between sm:justify-evenly items-center  '>
               {
                   !smallScreen && 
                   (
                       <div className='h-full w-full flex flex-row lg:flex-col justify-evenly items-center relative top-1/4 -translate-y-1/4 md:-mt-10 lg:-mt-10 lg:-mb-40'>
                        <button 
                            className='tracking-wide font-semibold h-full w-3/4 animate__animated animate__fadeInDown animate__slower flex flex-row md:mt-8 lg:mt-0 lg:flex-col lg:h-auto lg:-mb-10 '
                            onClick={() => setMenuActual('')}
                        >
                            <p className='text-2xl sm:text-4xl lg:text-4xl md:mt-4 lg:w-full lg:flex font-tmodel2 text-white  text-center  lg:items-center lg:justify-center h-full lg:h-auto  '> Manuel </p>
                            <div className='sm:h-8 w-1 sm:mx-3 lg:mx-0 lg:h-1 lg:w-full md:mt-5 bg-green-600 lg:my-2 lg:mt-2   '/>
                            <p className='text-2xl sm:text-4xl lg:text-4xl md:mt-4 w-full flex font-tmodel2 text-white text-center lg:justify-center h-full  lg:m-0' > Alegría </p>
                            {
                                !mobile && <p className='text-sm xl:text-base justify-center w-full flex font-tmodel2 text-white mt-4 bg-green-600 px-4 py-2 uppercase shadow-lg shadow-green-900 h-full  '>Fotógrafo Profesional</p>
                            }
                        </button>

                        <button 
                            onClick={ menuActive }
                            className = { menuClass }
                        >
                            <i className={`fas fa-bars text-3xl text-white md:mt-10 lg:${activateMenu ? 'mt-44' : 'mt-8'} py-2`}></i>
                        </button>
                       </div>
                   )
               }

                {
                    smallScreen &&
                    (
                        <div className='h-full w-full flex flex-row justify-between items-center relative top-1/4 -translate-y-1/4'>
                            <button 
                                onClick={ menuActive }
                                className = { menuClass }
                            >
                                <i className="fas fa-bars text-3xl text-white"></i>
                            </button>

                            <button 
                                className='tracking-wide font-semibold h-full w-3/4 lg:h-auto animate__animated animate__fadeInDown animate__slower flex flex-row items-center '
                                onClick={() => setMenuActual('')}
                            >
                                <p className='text-3xl sm:text-4xl  l  font-tmodel2 text-white  text-center    '> Manuel </p>
                                <div className='h-2/5 w-1 mx-3 bg-green-600     '/>
                                <p className='text-3xl sm:text-4xl  w-full flex font-tmodel2 text-white text-center    ' > Alegría </p>

                            </button>
                        </div>
                    )
                }
                {
                    activateMenu && 
                    (
                        <div className='flex flex-col border-2 border-white/40 p-4 -mt-32 rounded-lg w-90pw animate__animated animate__fadeInDown'>
                            <div className='flex flex-row'>
                                <button 
                                    className='w-1/2 group border-r border-b pb-1 px-3'
                                    onClick={ () => {
                                        setActualPage(0)
                                        colocarFotos('sesiones')
                                    }}
                                >
                                    <i className="fas fa-camera-retro text-3xl text-blue-800"></i>
                                    <p className='text-xs text-gray-300 transition ease-in-out  group-hover:scale-110 duration-300 '>Sesiones de fotos</p>
                                </button>
                                <button
                                    className='w-1/2 group border-b pb-5'
                                    onClick={() =>{
                                        setActualPage(0);
                                        colocarFotos('eventos');
                                    }}
                                >
                                    <i className="far fa-calendar-alt text-3xl text-yellow-500"></i>
                                    <p className='text-xs text-gray-300 transition ease-in-out  group-hover:scale-110 duration-300'>Eventos</p>
                                </button>
                            </div>
                            <div className='flex flex-row '>
                                <button
                                    className='w-1/2 group border-r pt-2 '
                                    onClick={ () => {
                                        setActualPage(0)
                                        colocarFotos('paisajes')
                                    }}
                                >
                                    <i className="far fa-image text-3xl text-green-400"></i>
                                    <p className='text-xs text-gray-300 transition ease-in-out  group-hover:scale-110 duration-300'>Paisajes</p>
                                </button>
                                <button
                                    className='w-1/2 group pt-1'
                                    onClick={ () => {
                                        setActualPage(0);
                                        colocarFotos('bodas');
                                    }}
                                >
                                    <img src={weddingIcon} alt='wedding' className='w-wwd h-hwd leading-9 m-auto' />
                                    <p className='text-xs text-gray-300 transition ease-in-out  group-hover:scale-110 duration-300'>Bodas</p>
                                </button>
                            </div>
                        </div>
                    )
                }
                {
                    (!smallScreen || !mobile ) && 
                    <button 
                        className='block text-xl text-white hover:text-green-600 animate__animated animate__fadeInUp animate__slower'
                        onClick={ handleToggleContact}    
                    >
                        { !toggleContact ? 'Contacto' : 'Proximamente'}
                    </button> 
                }
            </div>
            
        </div>
    )
}
