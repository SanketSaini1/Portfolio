import React from 'react'
import {motion} from "framer-motion";

const Frontend = () => {
  return (
    <motion.div className="skills__content"
    initial={{y:50}}
    whileInView={{y:0}}
    transition={{duration:2,type:"spring"}}
    >
        <h3 className="skills__title">Front End Developer</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                <i class='bx bx-badge-check' ></i>

                <div>
                    <h3 className="skills__name">HTML</h3>
                    <span className="skills__level">Basic</span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-badge-check' ></i>

                <div>
                    <h3 className="skills__name">Css</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>


                <div className="skills__data">
                <i class='bx bx-badge-check' ></i>

                <div>
                    <h3 className="skills__name">Javascript</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>
                <div className="skills__data">
                <i class='bx bx-badge-check' ></i>

                <div>
                    <h3 className="skills__name">React Js</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>
            </div>

        </div>
    </motion.div>
  )
}

export default Frontend