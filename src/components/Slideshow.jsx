import React, {  useEffect, useState, useLayoutEffect } from 'react'
import 'animate.css';
import { getHomeImages } from './getImages';
import './slideshow.css'

const Slideshow = () => {
    const [homeImages, setHomeImages] = useState([]);
    const [currentImgIndex, setCurrentImgIndex] = useState(0);


    useEffect(() => {
      setHomeImages( getHomeImages() )
    }, [])
    
    useLayoutEffect(() => {
        const interval = setInterval( () => {
            if( currentImgIndex === 3 ){
                setCurrentImgIndex(0);
            }else{
                setCurrentImgIndex( currentImgIndex + 1)
            }
        }, 4000)
        
        
        return () => clearInterval(interval) 
    }, [currentImgIndex])
    


    return (
        <div className='h-[90vh] xl:h-screen w-full animate__animated animate__fadeIn animate_slower '>
            <img src={homeImages[0]} alt="..." className={`h-screen w-full object-cover animate__animated animate__fadeIn ${ currentImgIndex === 0 ? 'block' : 'hidden'} `} />
            <img src={homeImages[1]} alt="..." className={`h-screen w-full object-cover animate__animated animate__fadeIn ${ currentImgIndex === 1 ? 'block' : 'hidden'}`} />
            <img src={homeImages[2]} alt="..." className={`h-screen w-full object-cover animate__animated animate__fadeIn ${ currentImgIndex === 2 ? 'block' : 'hidden'}`} />
            <img src={homeImages[3]} alt="..." className={`h-screen w-full object-cover animate__animated animate__fadeIn ${ currentImgIndex === 3 ? 'block' : 'hidden'}`} />
        </div>
      );
}

export default Slideshow
