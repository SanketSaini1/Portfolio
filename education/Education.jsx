import React from 'react'
import { useRef } from 'react'
// import "./index.css";
import {motion, useScroll} from "framer-motion";
import Lilicon from '../LilIcon/Lilicon';
import ParticleContainer from '../../ParticleContainer';

const Details =({position,company,companyLink,time,address,work})=>{
    const ref= useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
         <Lilicon reference={ref}/>
         <motion.div
         initial={{y:50}}
         whileInView={{y:0}}
         transition={{duration:0.5,type:"spring"}}
         >
            
            <h3 className='capitalize font-bold text-2xl  sm:text-xl xs:text-lg'>{position}&nbsp; <a href={companyLink}
            target="_blank"
            >{company}</a> </h3>
            <span className='capitalize font-medium text-stone-800 xs:text-sm'>
                {time}|{address}
            </span>
            <p className='font-medium w-full  md:text-sm'>
                
                {work}
            </p>
        </motion.div>
    </li>
}

const Education = () => {
  const ref = useRef(null);
  const {scrollYProgress}=useScroll({
    target:ref,
    offset:["start end","end start"]
  })
    
  return (
    <div className='my-64 '>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-4xl xs:text-3xl md:mb-16 '>
            Education
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

            <motion.div 
            style={{scaleY:scrollYProgress}}
            className=' absolute left-9 top-0 w-[4px] h-full bg-black origin-top dark:bg-white
            md:w-[4px] md:left-[30px] xs:left-[20px] '/>

            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>

<Details
               position="GreenField Public School" company="@Class 10"
               time="2017-18" address="  Kurukshetra,Harayana"
               work="I scored with CGPA:10 in 10th CBSE Boards"
               
               
               />
               

<Details
               position="GreenField Public School" company="@Class 12"
               time="2019-20" address="  Kurukshetra,Harayana"
               work="I scored a Percentage:83 in  . 
                12 CBSE Boards"
               
               />

<Details
               position="JC BOSE UNIVERSITY" company="@(B-TECH)"
               time="2020-24" address="Faridabad"
               work="My current CGPA is 8.91 in 
               12 CBSE Boards"
               
               />

            </ul>

        </div>
    </div>
  )
}

export default Education