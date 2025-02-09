import React from 'react'
import {motion} from "motion/react"


function Button({children, className, href="#", onClick}) {
  return (
    <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    // onClick={() => onClick(console.log(href))}
    onHoverStart={() => console.log("hover started!")}
    className={`${className } bg-gray-200 hover:bg-gray-300 text-black  px-8 py-2  font-medium rounded cursor-pointer `}
  >
    <a href={`${href}`}>{children}</a>
    
  </motion.button>
  )
}

export default Button