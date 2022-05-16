import React from 'react'

const Modal = ({ srcImg, setOpenModal, setActivePicture }) => {

    const closeModal = () => {
        setActivePicture(null)
        setOpenModal(false)
        
    }

    return (
        <div 
            onClick={(e) => e.target.id !== 'modalImagen' && closeModal()} 
            id='modal' 
            className='fixed bg-black/80  h-screen w-screen z-100 animate__animated animate__fadeIn'
        >
            <div className=' w-3/4 h-3/4 m-auto  -mt-10 relative top-1/2 transform -translate-y-1/2 '>
                <button 
                    className='w-full'
                    onClick={ closeModal }
                >
                    <i className="fas fa-times text-white text-3xl float-right"></i>
                </button>
                <div className='w-full h-full flex justify-center'>
                    <img id='modalImagen' src={srcImg} alt="imagen" className='object-cover min-h-full h-full' />
                </div>
            </div>
        </div>
    )
}

export default Modal
