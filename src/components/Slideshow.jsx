import React, { useRef, useEffect } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import 'animate.css';

const Slideshow = () => {
    const ref = useRef();

    useEffect( () => {
        if ( ref.current ) {
          console.log( ref.current.splide.length );
        }
      } );
    return (
        <div className='blockh-full '>
         
            <Splide
                options={ {
                    rewind: true,
                    width : 1550,
                    height: 757,
                    arrows: false,
                    autoplay: true,
                    interval: 2500,
                    pauseOnFocus: false,
                    type: 'fade',
                    pauseOnHover: false,
                    speed: 2000,
                    ref: {ref}
                    
                } }
            >
                <SplideSlide>
                    <div className='bg-random4 bg-cover bg-center bg-no-repeat h-full w-full animate__animated animate__fadeIn animate__slower object-cover '></div>
                </SplideSlide>
                <SplideSlide>
                    <div className='bg-random2 bg-center bg-cover bg-no-repeat h-full w-full '></div>
                </SplideSlide>
                <SplideSlide>
                    <div className='bg-random3 bg-center bg-cover bg-no-repeat h-full w-full '></div>
                </SplideSlide>
                <SplideSlide>
                    <div className='bg-random1 bg-center bg-cover bg-no-repeat h-full w-full '></div>
                </SplideSlide>
                <SplideSlide>
                    <div className='bg-random5 bg-cover bg-center bg-no-repeat h-full w-full '></div>
                </SplideSlide>
                <SplideSlide>
                    <div className='bg-random6 bg-cover bg-center bg-no-repeat h-full w-full '></div>
                </SplideSlide>
                <SplideSlide>
                    <div className='bg-random7 bg-cover bg-center bg-no-repeat h-full w-full '></div>
                </SplideSlide>
            </Splide>
        </div>
      );
}

export default Slideshow
