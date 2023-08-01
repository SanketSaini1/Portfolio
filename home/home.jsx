import React from "react";
import Social from "./social";
import "./home.css";
import Data from "./data";
import ScrollDown from "./ScrollDown";
import ParticleContainer from "../../ParticleContainer";

const Home = () => {
    return(
        <section className="home section " id="home">
            <div className="home__container container grid">
                
                <div className="home__content grid">
                    <Social/>
                    
                    {/* <ParticleContainer/> */}
                    <div className="home__img"></div>
                    <Data />
                  
                </div>
                <ScrollDown/>
            </div>
        </section>

    )
}
export default Home