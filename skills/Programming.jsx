import React from 'react'
import {motion} from "framer-motion";

const Programming = () => {
  return (
    <motion.div className="skills__content"
                 initial={{y:50}}
                 whileInView={{y:0}}
                 transition={{duration:1,type:"spring"}}
    >
    <h3 className="skills__title">Primary</h3>

    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
            <i class='bx bx-badge-check' ></i>

            <div>
                <h3 className="skills__name">C++</h3>
                <span className="skills__level">intermediate</span>
            </div>
            </div>

            <div className="skills__data">
            <i class='bx bx-badge-check' ></i>

            <div>
                <h3 className="skills__name">OOPS</h3>
                <span className="skills__level">Intermediate</span>
            </div>
            </div>


            <div className="skills__data">
            <i class='bx bx-badge-check' ></i>

            <div>
                <h3 className="skills__name">Data Structures</h3>
                <span className="skills__level">Intermediate</span>
            </div>
            </div>
            <div className="skills__data">
            <i class='bx bx-badge-check' ></i>

            <div>
                <h3 className="skills__name">Algorithms</h3>
                <span className="skills__level">Intermediate</span>
            </div>
            </div>
        </div>

            
    </div>
</motion.div>
  )
}

export default Programming