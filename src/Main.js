import TodoInput  from './TodoInput'
import React, { useState } from 'react'
import dark from './images/mobiledark.jpg'
import dark1 from './images/bg-desktop-dark.jpg'
import light from './images/mobilelight.jpg'
import light1 from './images/bg-desktop-light.jpg'
import lightbutton from './images/icon-sun.svg'
import darkbutton from './images/icon-moon.svg'

function Main() {
    const [day, setday ] = useState(true)


console.log(day)
  return (
    <div className={day ? 'bg-light' : 'bg-dark'}>
        <div >
            {day ?
           <div>
               <img src={lightbutton} alt='' className='absolute right-12 top-8' onClick={() => setday(false)}/> 
               <img src={light} alt='' className='img'/>
               <img src={light1} alt='' className='img1'/>
           </div>
           :
           <div>
               <img src={darkbutton} alt='' className='absolute right-12 top-8 w-5' onClick={() => setday(true)}/> 
               <img src={dark} alt='' className='img'/> 
               <img src={dark1} alt='' className='img1'/> 
           </div>
           }
        </div>
      <TodoInput props={day}/>
    </div>
  )
}

export default Main
