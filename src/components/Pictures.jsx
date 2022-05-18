import React, { useState } from 'react'
import { Plock } from "react-plock";
import './pictures.css'
import { motion } from "framer-motion";


export const Pictures = ({pictures, setOpenModal, setActivePicture }) => {    

    const breakpoints = [
        { size: 0, columns: 1},
        { size: 450, columns: 2},
        { size: 768, columns:3 }, 
    ];

    const activeModal = ( pic ) => { 
        setActivePicture(pic )
        setOpenModal( true )
    }

    if( pictures.length === 0 ) return null
    
    return (
        <>
        <Plock gap={0} nColumns={breakpoints}   >
            {pictures.map( picture => (
                <motion.img 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                    onClick={() => activeModal(picture)}
                    key={picture}
                    src={picture} 
                    alt='imagen' 
                    className=' hover:scale-105 duration-300 hover:z-50'
                />
            ))}
        </Plock>
        </> 
    )
}
