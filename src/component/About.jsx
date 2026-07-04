import React from "react";
import { motion } from "motion/react";
import TitleComponent from "./TitleComponent";
import { assets } from "../assets/assets";
import Button from './Button'

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className=" container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden flex flex-col items-center justify-center"
      id="About"
    >
      <TitleComponent
        title="About "
        titleSpan="Our Brand"
        description="Crafting Beautiful Hampers, Sharing Memorable Moments"
      />
      <div className=" flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          className="w-full sm:w-1/2 max-w-lg"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">5+</p>
              <p>Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">10k+</p>
              <p>Hampers Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">500+</p>
              <p>Corporate Partners</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">100%</p>
              <p>Happy Customers</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            CharmBox hadir sebagai solusi hampers dan gift box premium untuk segala momen spesialmu. Kami percaya bahwa setiap hadiah menceritakan sebuah kisah, itulah mengapa kami berkomitmen menyajikan kurasi produk terbaik, desain kemasan elegan, dan sentuhan personal untuk setiap pesanan Anda.
          </p>
          <Button href="#Project">Learn More</Button>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
