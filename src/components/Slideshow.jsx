import React, { useRef, useEffect, useState, useReducer } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import 'animate.css';
import { getHomeImages } from '../utils/getHomeImages';
import './slideshow.css'

const Slideshow = () => {
    const [homeImages, setHomeImages] = useState([]);
    const [currentImgIndex, setCurrentImgIndex] = useState(0);


    useEffect(() => {
      setHomeImages( getHomeImages() )
    }, [])
    
    useEffect(() => {
        const interval = setInterval( () => {
            if( currentImgIndex === 3 ){
                setCurrentImgIndex(0);
            }else{
                setCurrentImgIndex( currentImgIndex + 1)
            }
        }, 3000)
        
        
        return () => clearInterval(interval)
    }, [currentImgIndex])
    


    return (
        <div className='h-full w-full animate__animated animate__fadeInLeft animate_slower'>
                    {
                        currentImgIndex === 0 ? <img src={homeImages[currentImgIndex]} alt='descripcion' className='object-cover h-full w-full animate__animated animate__fadeInRight animate_slower' style={{ objectPosition: '20% 50%'}} /> 
                        : currentImgIndex === 1 ?  <img src={homeImages[currentImgIndex]} alt='descripcion' className='object-cover object-center h-full w-full animate__animated animate__fadeInLeft animate_slower' /> 
                        : currentImgIndex === 2 ? <img src={homeImages[currentImgIndex]} alt='descripcion' className='object-cover h-full item animate__animated animate__fadeIn animate_slower' style={{ objectPosition: '65% 50%'}} />
                        : <img src={homeImages[currentImgIndex]} alt='descripcion' className='object-cover h-full w-full animate__animated animate__fadeIn animate_slower' style={{ objectPosition: '33% 25%'}} />
                    }
                    {/* <img src={homeImages[0]} alt='descripcion' className='object-cover  h-full w-auto' style={{ objectPosition: '20% 50%'}} /> */}
                    {/* <img src={homeImages[1]} alt='descripcion' className='object-cover object-center h-full w-auto' /> */}
               
                    {/* <img src={homeImages[2]} alt='descripcion' className='object-cover h-full w-auto' style={{ objectPosition: '65% 50%'}} /> */}

                    {/* <img src={homeImages[3]} alt='descripcion' className='object-cover h-full w-auto ' style={{ objectPosition: '33% 25%'}} /> */}
        </div>
      );
}

export default Slideshow
