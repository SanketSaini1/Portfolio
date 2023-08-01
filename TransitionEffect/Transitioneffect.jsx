import React from 'react'
import {motion} from "framer-motion"
// import "./index.css"

const Transitioneffect = () => {
  return (
   <>
    <motion.div class='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-cyan-500'
    initial={{x:"100%",width:"100%"}}
    animate={{x:"0%",width:"0%"}}
    // exit={{x:["0%","100%"],width:["0%","100%"]}}
    transition={{duration:0.8,ease:"easeInOut"}}
    />
     <motion.div class='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-zinc-300'
    initial={{x:"100%",width:"100%"}}
    animate={{x:"0%",width:"0%"}}
    // exit={{x:["0%","100%"],width:["0%","100%"]}}
    transition={{delay:0.2,duration:0.8,ease:"easeInOut"}}
    />
     <motion.div class='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-gray-800'
    initial={{x:"100%",width:"100%"}}
    animate={{x:"0%",width:"0%"}}
    // exit={{x:["0%","100%"],width:["0%","100%"]}}
    transition={{delay:0.3,duration:0.8,ease:"easeInOut"}}
    />
    </>
  )
}
export default Transitioneffect