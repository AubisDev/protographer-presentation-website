import React, {useState, useEffect } from 'react'
import { Navbar } from './Navbar'
import { Pictures } from './Pictures';
import Modal from './Modal'
import Slideshow from './Slideshow';
import MobileMenu from './MobileMenu';
import { getAllImages } from './getImages';

export const Home = () => {
    const [pictures, setPictures] = useState([]);
    const [openResposiveMenu, setOpenResposiveMenu] = useState(false)
    const [menuActual, setMenuActual] = useState(false);

    const [activePicture, setActivePicture] = useState(null);
    const [openModal, setOpenModal] = useState(false) 
    const [page, setPage] = useState(0);    

    useEffect(()=>{
        setPictures( getAllImages() )
    },[] )

    return (
        <div className='h-auto w-screen flex flex-col xl:flex-row z-50 bg-gray-800 	'>
            <div className='w-full xl:w-1/5 h-10ph xl:h-screen flex flex-col items-center bg-gray-800 '>
                <Navbar  setMenuActual={ setMenuActual } setPictures={setPictures} openResposiveMenu={  openResposiveMenu } setOpenResposiveMenu={setOpenResposiveMenu} />
            </div>
            <div className='w-full h-90ph xl:w-4/5 xl:h-full shadow-lg  animate__animated animate__fadeInRight animate__slow overflow-hidden  '>
               {
                   !menuActual ? <Slideshow setMenuActual={setMenuActual}/> :  
                   <Pictures pictures={pictures}  setOpenModal={setOpenModal} setActivePicture={setActivePicture} openModal={openModal} setMenuActual={setMenuActual}/>
               }
            </div>
            
            { openModal &&  <Modal setActivePicture={setActivePicture} srcImg={activePicture} setOpenModal={ setOpenModal }/> }
            {
                openResposiveMenu && <MobileMenu setMenuActual={ setMenuActual } setPictures={setPictures} setOpenResposiveMenu={ setOpenResposiveMenu } />
            }
        </div>
    )
}
