import wedding1 from '../img/wedding-1.jpg'
import wedding2 from '../img/wedding-2.jpg'
import wedding3 from '../img/wedding-3.jpg'
import wedding4 from '../img/wedding-4.jpg'
import wedding5 from '../img/wedding-5.jpg'
import evento1 from '../img/evento-1.jpg'
import evento2 from '../img/evento-2.jpg'
import evento3 from '../img/evento-3.jpg'
import evento4 from '../img/evento-4.jpg'
import evento5 from '../img/evento-5.jpg'
import evento7 from '../img/evento-7.jpg'
import evento8 from '../img/evento-8.jpg'
import evento9 from '../img/evento-9.jpg'
import evento6 from '../img/evento-6.jpg'
import paisaje1 from '../img/paisaje-1.jpg'
import paisaje2 from '../img/paisaje-2.jpg'
import paisaje3 from '../img/paisaje-3.jpg'
import paisaje4 from '../img/paisaje-4.jpg'
import paisaje5 from '../img/paisaje-5.jpg'
import persona1 from '../img/persona-1.jpg'
import persona2 from '../img/persona-2.jpg'
import persona3 from '../img/persona-3.jpg'
import persona4 from '../img/persona-4.jpg'
import persona5 from '../img/persona-6.jpg'
import persona6 from '../img/persona-7.jpg'
import persona7 from '../img/persona-8.jpg'
import random1 from '../img/random-1.jpg'
import random2 from '../img/random-2.jpg'
import random3 from '../img/random-3.jpg'
import random4 from '../img/random-4.jpg'
import random5 from '../img/random-5.jpg'

export const getRandomImages = () => { 
    return [ [random1,random2, random3, random4], [random5, wedding1, wedding2, wedding3], [wedding4,wedding5, persona1, persona2 ], [persona3, persona4, persona5, paisaje1 ], [paisaje2, paisaje3, paisaje4, paisaje5 ] ]
}
export const getWeddingImages =() => {  return [ [wedding1, wedding2, wedding3,wedding4 ],[wedding5, evento1, evento2, evento3], [evento4,  evento5, persona1, persona2], [persona3, persona4, persona5, paisaje1], [paisaje2, paisaje3, paisaje4, paisaje5] ] }
export const getPersonImages = () => { return [ [persona1, persona2, persona3, persona4], [persona5,  persona6,persona7, random3 ], [random4, random5, paisaje1, paisaje2 ], [paisaje3, paisaje4, paisaje5, random2], [random3,random5,paisaje2,persona1] ] }
export const getPaisajeImages = () => { return [ [paisaje1, paisaje2, paisaje3, paisaje4], [paisaje5, wedding1, wedding2, wedding3], [wedding4,wedding5 , persona1, persona2 ], [persona3, persona4, persona5, random1], [random2, random3, random4, random5], ] }
export const getEventImages = () => { return [ [evento1, evento2, evento3, evento4 ],[ evento5, evento6, evento7, evento8 ], [evento9, persona5, paisaje1, paisaje2 ], [paisaje3, paisaje4, paisaje5, random5],[persona3,evento1,persona4,wedding1,random1] ]}