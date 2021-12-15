import React, { useReducer, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Splide, SplideSlide } from '@splidejs/react-splide';

export const Pictures = ({pictures, setOpenModal, setActivePicture, page, setPage}) => {


    const activeModal = ( pic ) => { 
        setActivePicture(pic )
        setOpenModal( true )
    }

    if( pictures.length === 0 ) return null
    
    return (
        <Splide
            options={{
                rewind: true,
                speed : 2000,
                arrows: true,
                type: true,
            }}
        >
            <SplideSlide>
                <div className='h-screen w-full grid grid-rows-2 grid-cols-2 '>
                    {pictures[0].map( (picture, idx ) => (
                      <div className='h-full w-full ' key={uuidv4()}>
                        <img  
                            src={picture} 
                            alt={`imagen-${idx}`}    
                            className='w-full h-full  shadow-lg transform hover:scale-110 duration-500 ease-in-out hover:z-10 object-cover cursor-pointer'
                            onClick={(e) => activeModal( picture )}
                        /> 
                      </div>
                    ) )}
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className='h-screen w-full grid grid-rows-2 grid-cols-2 '>
                {pictures[1].map( (picture, idx ) => (
                     <div className='h-full w-full' key={uuidv4()}>
                        <img  
                            src={picture} 
                            alt={`imagen-${idx}`}    
                            className='w-full h-full  shadow-lg transform hover:scale-110 duration-500 ease-in-out hover:z-10 object-cover cursor-pointer'
                            onClick={(e) => activeModal( picture )}
                        /> 
                    </div>
                ) )}
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className='h-screen w-full grid grid-rows-2 grid-cols-2 '>
                    {pictures[2].map( (picture, idx ) => (
                        <div className='h-full w-full ' key={uuidv4()}>
                            <img  
                                src={picture} 
                                alt={`imagen-${idx}`}    
                                className='w-full h-full  shadow-lg transform hover:scale-110 duration-500 ease-in-out hover:z-10 object-cover cursor-pointer'
                                onClick={(e) => activeModal( picture )}
                            /> 
                        </div>
                    ) )}
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className='h-screen w-full grid grid-rows-2 grid-cols-2 '>
                    {pictures[3].map( (picture, idx ) => (
                        <div className='h-full w-full' key={uuidv4()}>
                        <img  
                            src={picture} 
                            alt={`imagen-${idx}`}    
                            className='w-full h-full  shadow-lg transform hover:scale-110 duration-500 ease-in-out hover:z-10 object-cover cursor-pointer'
                            onClick={(e) => activeModal( picture )}
                        /> 
                       </div>
                    ) )}
                </div>
            </SplideSlide>

        </Splide>

    )
}

