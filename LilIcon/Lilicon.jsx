import React from 'react'
import {motion} from "framer-motion"
import { useScroll } from 'framer-motion';
import { useRef } from 'react';

const Lilicon = ({reference}) => {

  const {scrollYProgress}=useScroll({
    target:reference,
    offset:["center end","center center"]
  })

  return (
    <figure className='absolute left-0 stroke-black '>
        <svg
        className='-rotate-90'
        width="75"
        height="75"
        viewBox='0 0 100 100'
        >
            <circle cx="75" cy="50" r="20" className=' stroke-black stroke-1 fill-none'/>
            <motion.circle
            cx="75" cy="50" r="20" className=' stroke-[5px] fill-white'
            style={{
                pathLength:scrollYProgress
             }}/>
            <circle cx="75" cy="50" r="10" className='animate-pulse stroke-1 fill-purple-900'/>
        </svg>
    </figure>
  )
}

export default Lilicon