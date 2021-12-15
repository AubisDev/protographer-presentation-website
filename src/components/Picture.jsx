import React from 'react'
const Picture = ({ picture,idx, inicio, final }) => {
    return (
        <>
            <img src={picture} alt='imagen' className='h-1/2 w-1/2 object-fit' />
        </>

    )
}

export default Picture
{/* <button 
                     className={`bg- bg-cover bg-center bg-no-repeat w-full h-full shadow-lg transform hover:scale-110 duration-500 ease-in-out hover:z-10`}
                     onClick={(e) => activeModal( picture)}
                >
                </button> */}