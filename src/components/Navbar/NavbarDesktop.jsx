import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { FiltrarImagenes, getAllImages } from '../getImages' 

const NavbarDesktop = ({setPictures, setMenuActual}) => {

  const handleImgSet = (filtro) => {
    setMenuActual(true);
    setPictures( FiltrarImagenes(filtro) );
  }
  return (
    <div className='w-4/5 h-full  m-auto flex flex-col justify-evenly items-center' >
        <button 
            className='tracking-wide font-semibold h-full w-3/4 animate__animated animate__fadeInDown animate__slower flex flex-row md:mt-8 lg:mt-0 lg:flex-col lg:h-auto lg:-mb-10 '
            onClick={() => setMenuActual(false)}
        >
            <p className='text-2xl sm:text-4xl lg:text-4xl md:mt-4 lg:w-full lg:flex font-tmodel2 text-white  text-center  lg:items-center lg:justify-center h-full lg:h-auto'> Manuel </p>
            <div className='sm:h-8 w-1 sm:mx-3 lg:mx-0 lg:h-1 lg:w-full md:mt-5 bg-green-600 lg:my-2 lg:mt-2   '/>
            <p className='text-2xl sm:text-4xl lg:text-4xl md:mt-4 w-full flex font-tmodel2 text-white text-center lg:justify-center h-full  lg:m-0' > Alegría </p>
            
            <p className='text-sm xl:text-base justify-center w-full flex font-tmodel2 text-white mt-4 bg-green-600 hover:bg-green-500 px-4 py-2 uppercase shadow-md shadow-green-900 hover:shadow-green-600 duration-300  h-full'>Fotógrafo Profesional</p>
        </button>
        <div className='w-full h-auto grid grid-cols-2 animate__animated animate__fadeIn '>
            {
                ['Sesiones', 'Paisajes', 'Eventos', 'Retratos','Album Completo'].map( (section, idx) => (
                    <button 
                        key={uuidv4()}
                        onClick={ () => handleImgSet(section) }
                        className={`w-full h-20 flex justify-center items-center flex-col text-sm text-white border border-gray-600 duration-300 group 
                        ${idx === 0 ? 'rounded-tl-lg hover:bg-pink-500' 
                        : idx ==1 ? 'rounded-tr-lg hover:bg-blue-500' 
                        : idx == 2 ? ' hover:bg-yellow-300' 
                        : idx == 3 ?' hover:bg-orange-500'
                        : ' col-span-2 rounded-b-lg hover:bg-green-500'}`}
                    >
                        <i className={`text-2xl duration-300 
                            ${idx === 0 ? 'fa-solid fa-image-portrait text-pink-500 group-hover:text-white ' 
                            : idx ==1 ? 'far fa-image text-blue-500 group-hover:text-white' 
                            : idx == 2 ? 'far fa-calendar-alt text-yellow-300 group-hover:text-white' 
                            : idx == 3 ?'fa-solid fa-user text-orange-500 group-hover:text-white'
                            : 'fa-solid fa-images  col-span-2 text-green-400 group-hover:text-white'
                            } `}></i> 
                        {section}
                    </button>
                ))
            }
        </div>
        <section
            className='flex flex-col text-center text-xl text-white  animate__animated animate__fadeInUp animate__slower'
        >
            Contacto
            <span className='text-base'>Tlf: +56 9 6579 3127</span>
            <span className='text-base'>Correo: alegriamanuelh@gmail.com </span>
        </section> 
    </div>
  )
}

export default NavbarDesktop