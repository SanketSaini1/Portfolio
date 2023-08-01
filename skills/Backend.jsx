import React from 'react'
import {motion} from "framer-motion";
import ParticleContainer from '../../ParticleContainer';
const Backend = () => {
  return (
    <motion.div className="skills__content"
    initial={{y:50}}
    whileInView={{y:0}}
    transition={{duration:3,type:"spring"}}
    >
     
        <h3 className="skills__title">BackEnd Developer</h3>

        <div className="skills__box">
          
            <div className="skills__group">
    
                <div className="skills__data">
                  
                <i class='bx bx-badge-check' ></i>
                
                <div>
                  
                    <h3 className="skills__name">Express(Node)</h3>
                    <span className="skills__level">Beginner</span>
                </div>
                </div>
            </div>

                
        </div>
    </motion.div>
  )
}

export default Backend