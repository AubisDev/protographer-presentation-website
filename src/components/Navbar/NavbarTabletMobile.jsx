import React from 'react'
import { v4 as uuidv4 } from 'uuid';
const NavbarTabletMobile = ({activateMenu, menuActive, setMenuActual}) => {
  return (
        <div className='w-full h-full flex flex-row justify-evenly items-center   '>
            <button 
                onClick={ () =>  menuActive() }
            >
                <i className="fas fa-bars text-3xl text-green-500 hover:text-green-400 duration-300"></i>
            </button>

            {
                activateMenu && (
                    <div className='w-1/3 h-auto grid grid-cols-4 gap-1 animate__animated animate__fadeIn -ml-12'>
                        {
                            ['Sesiones', 'Paisajes', 'Eventos', 'Retrato'].map( (section, idx) => (
                                <button
                                    key={uuidv4()}
                                    onClick={()=> setMenuActual(true)}
                                    className={`w-full h-15 flex justify-center p-1 items-center flex-col text-sm  text-white border border-gray-600 duration-300 group 
                                    ${idx === 0 ? ' hover:bg-pink-500' 
                                    : idx ==1 ? ' hover:bg-blue-500' 
                                    : idx == 2 ? ' hover:bg-yellow-300' 
                                    : ' hover:bg-orange-500'}`}
                                >
                                    <i className={`text-xl duration-300 
                                        ${idx === 0 ? 'fa-solid fa-image-portrait text-pink-500 group-hover:text-white ' 
                                        : idx ==1 ? 'far fa-image text-blue-500 group-hover:text-white' 
                                        : idx == 2 ? 'far fa-calendar-alt text-yellow-300 group-hover:text-white' 
                                        : 'fa-solid fa-user text-orange-500 group-hover:text-white'
                                        } `}></i> 
                                        
                                        {section}
                                </button>
                            ))
                        }
                    </div>
                )
            }
            <section
                className='hidden lg:flex  flex-col text-center text-lg text-white  animate__animated animate__fadeInUp animate__slower'
            >
                Contacto
                <span className='text-sm leading-4'>Tlf: +56 9 6579 3127</span>
                <span className='text-base'>Correo: alegriamanuelh@gmail.com </span>
            </section> 
            <button 
                className='tracking-wide font-semibold h-full  xl:h-auto animate__animated animate__fadeInDown animate__slower flex flex-row items-center ml-2 sm:ml-0'
                onClick={() => setMenuActual(false)}
            >
                <p className='text-3xl sm:text-4xl font-tmodel2 text-white  text-center'> Manuel </p>
                <div className='h-2/5 w-1 mx-3 bg-green-600     '/>
                <p className='text-3xl sm:text-4xl  w-full flex font-tmodel2 text-white text-center' > Alegría </p>

            </button>
        </div>
  )
}

export default NavbarTabletMobile