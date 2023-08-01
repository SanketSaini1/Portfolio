import React from 'react'
import {motion} from "framer-motion";

const Database = () => {
  return (
    <motion.div className="skills__content"
                 initial={{y:50}}
                 whileInView={{y:0}}
                 transition={{duration:4,type:"spring"}}
    >
    <h3 className="skills__title">DataBase</h3>

    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
            <i class='bx bx-badge-check' ></i>

            <div>
                <h3 className="skills__name">MySql</h3>
                <span className="skills__level">Intermediate</span>
            </div>
            </div>

          
        </div>

    </div>
</motion.div>
  )
}

export default Database