import React from "react";
import { motion } from "framer-motion";
import logo192 from "../assets/logo192.png";
import nextjslogo from "../assets/nextjslogo.png";
import pythonlogo from "../assets/pythonlogo.png";
import jslogo from "../assets/jslogo.png";
import mongodblogo from "../assets/mongodblogo.png";
const Skillset = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },

    four: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <div id="skillset">
      <h2>Skillset</h2>
      <section>
        <motion.div
          className="serviceBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <h3>2.5+</h3>
          <p>Years Experience</p>
        </motion.div>
        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
        >
          <span>Web Development</span>
          <img id="react-logo" src={logo192} alt="react-logo"></img>
          <span>ReactJS</span>
          <img id="next-logo" src={nextjslogo} alt="next-logo"></img>
          <span>NextJS</span>
        </motion.div>
        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.2,
          }}
        >
          
          <span>Languages</span>
          <img id="js-logo" src={jslogo} alt="js-logo"></img>
          <span>Javascript</span>
          <img id="python-logo" src={pythonlogo} alt="python-logo"></img>
          <span>Python</span>
        </motion.div>
        <motion.div
          className="serviceBox4"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
         
          <span>Database</span>
          <img id="mongodb-logo" src={mongodblogo} alt="js-logo"></img>
          
          
        </motion.div>
      </section>
    </div>
  );
};

export default Skillset;
