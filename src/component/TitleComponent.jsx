import React from 'react'

function TitleComponent({title, titleSpan, description}) {
  return (
    <>
      <h1 className="text-2xl sm:text-4xl font-semibold mb-2">
        {title}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          {titleSpan}
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8 ">
        {description}
      </p>
    </>
  )
}

export default TitleComponent