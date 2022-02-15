import React, {useState } from 'react'
import { Navbar } from './Navbar'
import { Pictures } from './Pictures';
import Modal from './Modal'
import Slideshow from './Slideshow';
import MobileMenu from './MobileMenu';

export const Home = () => {
    const [pictures, setPictures] = useState([]);
    const [openResposiveMenu, setOpenResposiveMenu] = useState(false)
    const [menuActual, setMenuActual] = useState('');
    const [actualPage, setActualPage] = useState(0);

    const [activePicture, setActivePicture] = useState(null);
    const [openModal, setOpenModal] = useState(false) 
    const [page, setPage] = useState(0);

    


    return (
        <div className='h-screen w-screen flex flex-col lg:flex-row z-50 '>
            <div className='md:w-full h-10ph lg:w-1/5 lg:h-full bg-gray-800'>
                <Navbar  setActualPage={ setActualPage } setMenuActual={ setMenuActual } setPictures={setPictures} openResposiveMenu={  openResposiveMenu } setOpenResposiveMenu={setOpenResposiveMenu}/>
            </div>
            <div className='w-full h-90ph lg:w-4/5 lg:h-full shadow-lg  animate__animated animate__fadeInRight animate__slow   overflow-hidden  '>
               {
                   menuActual === '' ? <Slideshow setMenuActual={setMenuActual}/> :  <Pictures pictures={pictures} actualPage={pictures[page]} setOpenModal={setOpenModal} setActivePicture={setActivePicture} openModal={openModal} actualPage={actualPage} setActualPage={setActualPage}/>
               }
            </div>
            
            { openModal &&  <Modal setActivePicture={setActivePicture} srcImg={activePicture} setOpenModal={ setOpenModal }/>
            }
            {
                openResposiveMenu && <MobileMenu setMenuActual={ setMenuActual } setPictures={setPictures} setOpenResposiveMenu={ setOpenResposiveMenu } setActualPage={setActualPage}/>
            }
        </div>
    )
}
