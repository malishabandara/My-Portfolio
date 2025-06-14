"use client";
import { assets, workData } from "@/assets/assets";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import ProjectModal from "./ProjectModal";
import ProjectGalleryModal from "./ProjectGalleryModal";

const Work = ({ isDarkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const projectsPerView = 3;

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = workData.length - projectsPerView;
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  const handleShowMoreClick = () => {
    setIsGalleryModalOpen(true);
  };

  const handleGalleryProjectClick = (project) => {
    setIsGalleryModalOpen(false);
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  const visibleProjects = workData.slice(
    currentIndex,
    currentIndex + projectsPerView,
  );

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="work"
        className="w-full px-[12%] py-10 scroll-mt-20"
      >
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-2 text-lg"
        >
          My Portfolio
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-5xl"
        >
          Latest Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mb-12 max-w-2xl text-center mx-auto mt-5"
        >
          Explore my latest work showcasing innovative solutions across web
          development, mobile applications, and cutting-edge technology
          implementations. Each project represents a unique challenge solved
          with creativity and technical expertise.
        </motion.p>

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="relative overflow-hidden mb-12"
        >
          <div className="flex gap-8 transition-transform duration-500 ease-in-out">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="flex-none w-80 h-96 bg-cover bg-center rounded-xl relative group cursor-pointer shadow-lg"
                style={{ backgroundImage: `url(${project.bgImage})` }}
                onClick={() => handleProjectClick(project)}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-xl" />

                {/* Content Card */}
                <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-800 m-4 rounded-lg p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {project.description}
                      </p>
                      <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <div className="ml-4">
                      <div className="w-10 h-10 border-2 border-gray-800 dark:border-white rounded-full flex items-center justify-center group-hover:bg-lime-300 group-hover:border-lime-300 transition-all duration-300">
                        <Image
                          src={assets.send_icon}
                          alt="View"
                          className="w-5 h-5"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Number */}
                <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold text-gray-900 dark:text-white">
                  {project.id}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: workData.length - projectsPerView + 1 }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-blue-600 dark:bg-blue-400"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                />
              ),
            )}
          </div>
        </motion.div>

        {/* Show More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="text-center"
        >
          <button
            onClick={handleShowMoreClick}
            className="inline-flex items-center justify-center gap-2 text-gray-700 dark:text-white border-2 border-gray-700 dark:border-white rounded-full py-3 px-10 hover:bg-lightHover dark:hover:bg-darkHover transition-all duration-500 hover:scale-105"
          >
            Show All Projects
            <Image
              src={
                isDarkMode
                  ? assets.right_arrow_bold_dark
                  : assets.right_arrow_bold
              }
              alt="Right arrow"
              className="w-4"
            />
          </button>
        </motion.div>
      </motion.div>

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
        isDarkMode={isDarkMode}
      />

      <ProjectGalleryModal
        projects={workData}
        isOpen={isGalleryModalOpen}
        onClose={() => setIsGalleryModalOpen(false)}
        onProjectClick={handleGalleryProjectClick}
        isDarkMode={isDarkMode}
      />
    </>
  );
};

export default Work;
