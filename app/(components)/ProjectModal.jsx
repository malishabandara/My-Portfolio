"use client";
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { assets } from "@/assets/assets";

const ProjectModal = ({ project, isOpen, onClose, isDarkMode }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            className="bg-white dark:bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <Image
                  src={isDarkMode ? assets.close_white : assets.close_black}
                  alt="Close"
                  className="w-6 h-6"
                />
              </button>

              {/* Project Image */}
              <div className="w-full h-64 md:h-80 relative rounded-t-lg overflow-hidden">
                <Image
                  src={project.bgImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 md:p-8">
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-3 py-1 rounded-full mb-3">
                    {project.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    {project.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Project Details
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {project.details}
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    <span>View Live Project</span>
                    <Image
                      src={assets.right_arrow_white}
                      alt="Arrow"
                      className="w-4 h-4"
                    />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg transition-colors"
                  >
                    <span>View Code</span>
                    <Image
                      src={
                        isDarkMode
                          ? assets.right_arrow_bold_dark
                          : assets.right_arrow_bold
                      }
                      alt="Arrow"
                      className="w-4 h-4"
                    />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
