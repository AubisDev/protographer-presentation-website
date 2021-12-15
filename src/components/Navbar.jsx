import React, { useEffect, useState } from 'react'
import weddingIcon from '../img/wedding-icon.png'
import { getEventImages, getPaisajeImages, getPersonImages, getWeddingImages } from './getImages'
import { useMediaQuery } from 'react-responsive';

export const Navbar = ({  setMenuActual, setPictures, openResposiveMenu, setOpenResposiveMenu }) => {

    const [activateMenu, setActivateMenu] = useState(false)
    const mobile = useMediaQuery({ query: '(max-width: 1024px)' })
    const smallScreen = useMediaQuery({ query: '(max-width: 768px)' });


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

    let menuClass = activateMenu ? `rotate-180 transition duration-500 lg:my-6 ` : 'animate__animated animate__fadeIn animate__slower'; 
    // let subMenuClass = activateMenu ? `flex flex-col border-2 border-white/40 p-4 -mt-20 rounded-lg w-3/4 animate__animated animate__fadeInDown` : `flex flex-col border-2 border-white/40 p-4 -mt-20 rounded-lg w-3/4  animate__animated animate__fadeInUp`
    return (
        <div className='w-4/5 h-full font-tmodel2 flex lg:flex-col m-auto'>
            <div className='w-full h-full flex flex-row lg:flex-col justify-between sm:justify-evenly items-center  '>
               {
                   !smallScreen && 
                   (
                       <>
                        <button 
                            className='tracking-wide font-semibold h-full lg:h-auto animate__animated animate__fadeInDown animate__slower flex lg:flex-col flex-row '
                            onClick={() => setMenuActual('')}
                        >
                            <p className='text-2xl sm:text-4xl lg:text-5xl  lg:w-full lg:flex font-tmodel2 text-white  text-center justify-center h-full lg:h-auto relative top-1/2 transform -translate-y-1/4 '> Manuel </p>
                            <div className='  sm:h-2/5 w-1 sm:mx-3 lg:mx-0 lg:h-1 lg:w-full bg-green-600  lg:my-2 lg:mt-2  sm:-mt-1 relative top-1/2 transform -translate-y-1/4  '/>
                            <p className='text-2xl sm:text-4xl lg:text-5xl lg:mt-3  w-full flex font-tmodel2 text-white text-center justify-center h-full relative top-1/2 transform -translate-y-1/4 ' > Alegría </p>
                            {
                                !mobile && <p className='text-sm xl:text-base justify-center w-full flex font-tmodel2 text-white mt-4 bg-green-600 px-4 py-2 uppercase shadow-lg shadow-green-900 h-full relative top-1/2 transform -translate-y-1/4 '>Fotógrafo Profesional</p>
                            }
                        </button>

                        <button 
                            onClick={ menuActive }
                            className = { menuClass }
                        >
                            <i className="fas fa-bars text-4xl text-white"></i>
                        </button>
                       </>
                   )
               }

                {
                    smallScreen &&
                    (
                        <>
                        <button 
                        onClick={ menuActive }
                        className = { menuClass }
                        >
                            <i className="fas fa-bars text-4xl text-white"></i>
                        </button>

                        <button 
                            className='tracking-wide font-semibold h-full lg:h-auto animate__animated animate__fadeInDown animate__slower flex lg:flex-col flex-row '
                            onClick={() => setMenuActual('')}
                        >
                            <p className='text-3xl sm:text-4xl lg:text-5xl  lg:w-full lg:flex font-tmodel2 text-white  text-center justify-center h-full lg:h-auto relative top-1/2 transform -translate-y-1/4 '> Manuel </p>
                            <div className='h-2/5 w-1 mx-3 lg:mx-0 lg:h-1 lg:w-full bg-green-600  lg:my-2 lg:mt-2 -mt-1 relative top-1/2 transform -translate-y-1/4  '/>
                            <p className='text-3xl sm:text-4xl lg:text-5xl lg:mt-3  w-full flex font-tmodel2 text-white text-center justify-center h-full relative top-1/2 transform -translate-y-1/4 ' > Alegría </p>
                            {
                                !mobile && <p className='text-base justify-center w-full flex font-tmodel2 text-white mt-4 bg-green-600 px-4 py-2 uppercase shadow-lg shadow-green-900'>Fotógrafo Profesional</p>
                            }
                        </button>
                        </>
                    )
                }
                {
                    activateMenu && 
                    (
                        <div className='flex flex-col border-2 border-white/40 p-4 -mt-20 rounded-lg w-90pw animate__animated animate__fadeInDown'>
                            <div className='flex flex-row'>
                                <button 
                                    className='w-1/2 group border-r border-b pb-1 px-3'
                                    onClick={ () => colocarFotos('sesiones')}
                                >
                                    <i className="fas fa-camera-retro text-3xl text-blue-800"></i>
                                    <p className='text-xs text-gray-300 transition ease-in-out  group-hover:scale-110 duration-300 '>Sesiones de fotos</p>
                                </button>
                                <button
                                    className='w-1/2 group border-b pb-5'
                                    onClick={() => colocarFotos('eventos')}
                                >
                                    <i className="far fa-calendar-alt text-3xl text-yellow-500"></i>
                                    <p className='text-xs text-gray-300 transition ease-in-out  group-hover:scale-110 duration-300'>Eventos</p>
                                </button>
                            </div>
                            <div className='flex flex-row '>
                                <button
                                    className='w-1/2 group border-r pt-2 '
                                    onClick={ () => colocarFotos('paisajes') }
                                >
                                    <i className="far fa-image text-3xl text-green-400"></i>
                                    <p className='text-xs text-gray-300 transition ease-in-out  group-hover:scale-110 duration-300'>Paisajes</p>
                                </button>
                                <button
                                    className='w-1/2 group pt-1'
                                    onClick={ () => colocarFotos('bodas')}
                                >
                                    <img src={weddingIcon} alt='wedding' className='w-wwd h-hwd leading-9 m-auto' />
                                    <p className='text-xs text-gray-300 transition ease-in-out  group-hover:scale-110 duration-300'>Bodas</p>
                                </button>
                            </div>
                        </div>
                    )
                }
                {
                    !smallScreen && 
                    <button className='block text-xl text-white hover:text-green-600 animate__animated animate__fadeInUp animate__slower'>
                        Contacto
                    </button> 
                }
            </div>
            
        </div>
    )
}
