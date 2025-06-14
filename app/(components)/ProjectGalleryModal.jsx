"use client";
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { assets } from "@/assets/assets";

const ProjectGalleryModal = ({
  projects,
  isOpen,
  onClose,
  onProjectClick,
  isDarkMode,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white dark:bg-gray-900 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    All Projects
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Click on any project to view details
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="bg-gray-100 dark:bg-gray-800 rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <Image
                    src={isDarkMode ? assets.close_white : assets.close_black}
                    alt="Close"
                    className="w-6 h-6"
                  />
                </button>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="group cursor-pointer"
                    onClick={() => onProjectClick(project)}
                  >
                    <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
                      <Image
                        src={project.bgImage}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                        <div className="bg-white dark:bg-gray-800 rounded-full p-3 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                          <Image
                            src={assets.send_icon}
                            alt="View"
                            className="w-6 h-6"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                        {project.description}
                      </p>
                      <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectGalleryModal;
