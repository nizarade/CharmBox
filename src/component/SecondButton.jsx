import React from 'react'
import {motion} from "motion/react"

function SecondButton({children, className, href="#", onClick}) {
  return (
    <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    // onClick={() => onClick(console.log(href))}
    onHoverStart={() => console.log("hover started!")}
    className={`${className } border bg-transparent border-white text-white px-8 py-2 rounded hover:bg-gray-300 hover:text-black font-medium cursor-pointer `}
  >
    <a href={`${href}`}>{children}</a>
    
  </motion.button>
  )
}

export default SecondButton