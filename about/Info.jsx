import React from "react";
import {motion} from "framer-motion";

const Info=()=>{

    return(
        <motion.div className="about__info grid"
                 initial={{y:50}}
                 whileInView={{y:0}}
                 transition={{duration:0.5,type:"spring"}}>
            <div className="about__box">
            <i class='bx bx-award about__icon'></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">3 months Working</span>
            </div>

            <div className="about__box">
            <i class='bx bx-briefcase-alt about__icon' ></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">3 + Projects</span>
            </div>


            <div className="about__box">
            <i class='bx bx-help-circle about__icon ' ></i>
                <h3 className="about__title">Help</h3>
                <span className="about__subtitle">24/7</span>
            </div>


        </motion.div>

  
    )
}
export default Info;