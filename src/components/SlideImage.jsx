import React from 'react'


const SlideImage = ({ imgSrc }) => {
    return (
        <div className="flex w-full h-1/4">
            <li className="splide__slide">
				<img src={imgSrc} className='w-full h-auto' />
			</li>
         </div>
    )
}

export default SlideImage
