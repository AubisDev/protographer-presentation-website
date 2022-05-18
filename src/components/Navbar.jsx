import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import NavbarDesktop from './Navbar/NavbarDesktop';
import NavbarTabletMobile from './Navbar/NavbarTabletMobile';

export const Navbar = ({  setMenuActual, setPictures, openResposiveMenu, setOpenResposiveMenu,}) => {

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

    const handleToggleContact = () => {
        setToggleContact( !toggleContact);
    }

    return (
        <div className='xl:w-1/5 w-full h-full font-tmodel2 flex items-center justify-between xl:fixed -ml-2'>
            <div className='w-full h-full flex flex-row lg:flex-col justify-between sm:justify-evenly items-center '>

                <div className={`h-full w-full hidden xl:flex flex-row `}>
                    <NavbarDesktop 
                        menuActive={menuActive} 
                        activateMenu={activateMenu} 
                        setPictures={setPictures}  
                        setMenuActual={setMenuActual}
                    />
                </div>

                <div className={`h-full w-full flex xl:hidden flex-row   `}>
                    <NavbarTabletMobile 
                        menuActive={menuActive} 
                        activateMenu={activateMenu} 
                        setMenuActual={setMenuActual}
                        setPictures={setPictures}  
                    />
                </div>
                    
            </div>
            
        </div>
    )
};


