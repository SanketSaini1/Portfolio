import React from 'react'
import Frontend from './Frontend';
import "./skills.css"
import Backend from './Backend';
import Programming from './Programming';
import Database from './database';
import {motion} from "framer-motion";
import Transitioneffect from '../TransitionEffect/Transitioneffect.jsx';
import ParticleContainer from '../../ParticleContainer';

const Skills = () => {
  return ( 
   <motion.div
    initial={{y:50}}
    whileInView={{y:0}}
    transition={{duration:0.5,type:"spring"}}>
    <section className="skills section" id="skills" >
      
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technical Level</span>
        <div>
          {/* <ParticleContainer/> */}
        </div>
        <div className="skills__container container grid">
            
            <Programming/>
            <Frontend/>
            <Backend/> 
            <Database/>
        </div>
    </section>    
    </motion.div>
  )
}

export default Skills;