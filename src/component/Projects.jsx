import React from 'react'
import { motion } from "motion/react";
import SliderButton from './SliderButton'
import TitleComponent from './TitleComponent'

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden "
      id="Project"
    >
      <div className="flex flex-col items-center justify-center">
        <TitleComponent
          title="Projects "
          titleSpan="Completed"
          description="Crafting Spaces, Building Legacies—Explore Our Portfolio"
        />
      </div>

      {/* Project Slider Container */}
      <SliderButton />
    </motion.div>
  )
}

export default Projects;