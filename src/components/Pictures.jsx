import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export const Pictures = ({pictures, setOpenModal, setActivePicture, openModal, setActualPage, actualPage}) => {    

    const activeModal = ( pic ) => { 
        setActivePicture(pic )
        setOpenModal( true )
    }

   const handleLeftArrow = () => {
       if(actualPage === 0 ){
           setActualPage(pictures.length-1)
       }
       else{
           setActualPage( actualPage - 1)
       }
   }

   const handleRightArrow = () => {
    if(actualPage === pictures.length-1 ){
        setActualPage(0)
    }
    else{
        setActualPage( actualPage + 1)
    }
}

    if( pictures.length === 0 ) return null
    
    return (
        <>
                <i 
                    className="fa-solid fa-circle-arrow-left  absolute  top-1/2 text-4xl left-0 z-[60] ml-2 text-white/90 cursor-pointer" 
                    onClick={ () => handleLeftArrow()}>
                </i>
                <div className='h-screen w-full grid grid-rows-2 grid-cols-2 animate__animated animate__fadeInRight'>
                    {pictures[actualPage].map( (picture, idx ) => (
                      <div className={`h-full w-full z-0 hover:z-50 ${ !openModal && 'animate__animated animate__slideInRight animate__fast'}`} key={uuidv4()}>
                        <img  
                            src={picture} 
                            alt={`imagen-${idx}`}    
                            className='w-full h-full transform hover:scale-110 duration-300 ease-in-out object-cover cursor-pointer' 
                            style={{ objectPosition: '50% 50%' }}
                            onClick={(e) => activeModal( picture )}
                        /> 
                      </div>
                    ) )}
                <i 
                    className="fa-solid fa-circle-arrow-right absolute  top-1/2 text-4xl right-0 z-[60] -mt-6 mr-2 text-white/90 cursor-pointer"
                    onClick={ () => handleRightArrow()}
                >
                </i>
                </div>
            
        </>
    )
}














// <Splide
// options={{
//     rewind: true,
//     speed : 2000,
//     arrows: true,
//     type: true,
// }}
// >
// <SplideSlide>
//     <div className='h-screen w-full grid grid-rows-2 grid-cols-2 '>
//         {pictures[0].map( (picture, idx ) => (
//           <div className='h-full w-full z-0 hover:z-50 ' key={uuidv4()}>
//             <img  
//                 src={picture} 
//                 alt={`imagen-${idx}`}    
//                 className='w-full h-full  shadow-lg transform hover:scale-110 duration-500 ease-in-out  object-cover cursor-pointer object-top'
//                 onClick={(e) => activeModal( picture )}
//             /> 
//           </div>
//         ) )}
//     </div>
// </SplideSlide>
// <SplideSlide>
//     <div className='h-screen w-full grid grid-rows-2 grid-cols-2 '>
//     {pictures[1].map( (picture, idx ) => (
//          <div className='h-full w-full z-0 hover:z-50' key={uuidv4()}>
//             <img  
//                 src={picture} 
//                 alt={`imagen-${idx}`}    
//                 className='w-full h-full  shadow-lg transform hover:scale-110 duration-500 ease-in-out  object-cover  cursor-pointer object-top'
//                 onClick={(e) => activeModal( picture )}
//             /> 
//         </div>
//     ) )}
//     </div>
// </SplideSlide>
// <SplideSlide>
//     <div className='h-screen w-full grid grid-rows-2 grid-cols-2 '>
//         {pictures[2].map( (picture, idx ) => (
//             <div className='h-full w-full z-0 hover:z-50' key={uuidv4()}>
//                 <img  
//                     src={picture} 
//                     alt={`imagen-${idx}`}    
//                     className='w-full h-full  shadow-lg transform hover:scale-110 duration-500 ease-in-out  object-cover cursor-pointer object-top'
//                     onClick={(e) => activeModal( picture )}
//                 /> 
//             </div>
//         ) )}
//     </div>
// </SplideSlide>
// <SplideSlide>
//     <div className='h-screen w-full grid grid-rows-2 grid-cols-2 '>
//         {pictures[3].map( (picture, idx ) => (
//             <div className='h-full w-full z-0 hover:z-50' key={uuidv4()}>
//             <img  
//                 src={picture} 
//                 alt={`imagen-${idx}`}    
//                 className='w-full h-full  shadow-lg transform hover:scale-110 duration-500 ease-in-out  object-cover cursor-pointer object-top'
//                 onClick={(e) => activeModal( picture )}
//             /> 
//            </div>
//         ) )}
//     </div>
// </SplideSlide>

// </Splide>
