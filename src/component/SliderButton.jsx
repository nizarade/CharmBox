import React, { useEffect } from 'react'
import { assets, projectsData } from '../assets/assets';

function SliderButton() {
    const [activeIndex, setActiveIndex] = React.useState(0);
  const [translateValue, setTranslateValue] = React.useState(1);

  const nextProject = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };
  const prevProject = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const updateTranslateValue = () => {
      if (window.innerWidth >= 1024) {
        setTranslateValue(projectsData.length);
      } else {
        setTranslateValue(1);
      }
    };
    updateTranslateValue();
    window.addEventListener("resize", updateTranslateValue);
    return () => {
      window.removeEventListener("resize", updateTranslateValue);
    };
  }, []);
  return (
    <>
      <div className="flex justify-end items-center mb-8">
        <button
          onClick={prevProject}
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Previous Project"
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button
          onClick={nextProject}
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Next Project"
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>
      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(activeIndex * 100) / translateValue}%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto mb-14"
              />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2  shadow-xl">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h2>
                  <p>
                    {project.price} <span className="px-1">|</span> {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SliderButton;