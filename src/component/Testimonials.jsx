import React from 'react'
import { motion } from "motion/react";
import TitleComponent from './TitleComponent'
import { assets,  testimonialsData } from '../assets/assets'

function Testimonials() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-10 pt-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden "
      id="Testimonials"
    >
      <div className="flex flex-col items-center justify-center">
        <TitleComponent
          title="Customer "
          titleSpan="Testimonials"
          description="Real Stories from Those Who Found Home with Us"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testi, index) => (
          <div
            key={index}
            className="xl:w-[400px] xl:h-[400px] xl:px-8 xl:py-12 lg:w-[360px] lg:h-[360px] lg:px-4 lg:py-6 max-w-[400px] px-8 py-12  border shadow-lg  rounded-full  text-center"
          >
            <img
              src={testi.image}
              alt={testi.alt}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl xl:text-xl lg:text-lg text-gray-700 font-medium">
              {testi.name}
            </h2>
            <p className=" text-sm xl:text-sm lg:text-xs text-gray-500 mb-4 xl:mb-4 lg:mb-2">
              {testi.title}
            </p>
            <div className="flex justify-center gap-1 mb-4 xl:mb-4 lg:mb-2">
              {Array.from({ length: testi.rating }, (item, index) => (
                <img key={index} src={assets.star_icon} alt="" />
              ))}
            </div>
            <p className="text-gray-600 lg:text-base xl:text-base">
              {testi.text}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Testimonials