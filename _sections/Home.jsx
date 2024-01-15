// components 
import ParticlesContainer from "@/_components/ParticlesContainer";
import ProjectsBtn from "@/_components/ProjectsBtn";

import { motion } from "framer-motion";
import fadeIn from "../utils/variants"




const Home = () => {

  return (
    <div id="home" className="h-auto bg-primary/30 py-[5rem] lg:py-[2rem]  relative">
      {/* text */}
      <div className="w-full h-full">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">

          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1  mt-[5rem] xl:mt-0">
            TransForming Ideas <br />
            Into <span className="text-accent">Digital Reality</span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-s, xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">Hi, I"m Zeeshan Ahmed
            A Front-End Web Developer
            I"m focused on building responsive front-end web applications integrating back-end technologies.
          </motion.p>

          <motion.div variants={fadeIn("down", 0.4)} initial="hidden" animate="show" exit="hidden"
            className="flex justify-center xl:justify-normal">
            <ProjectsBtn />
          </motion.div>

        </div>
      </div>

      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">

        {/* bg image */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>

        {/* particles */}
        <ParticlesContainer />

      </div>

    </div>
  )
};

export default Home;
