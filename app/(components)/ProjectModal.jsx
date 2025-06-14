"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { assets } from "@/assets/assets";

const ProjectModal = ({ project, isOpen, onClose, isDarkMode }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide images
  useEffect(() => {
    if (!project || !project.images) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex >= project.images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [project]);

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex >= project.images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex <= 0 ? project.images.length - 1 : prevIndex - 1,
    );
  };

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
            className="bg-white dark:bg-gray-900 rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <Image
                  src={isDarkMode ? assets.close_white : assets.close_black}
                  alt="Close"
                  className="w-6 h-6"
                />
              </button>

              {/* Image Slideshow */}
              <div className="relative w-full h-64 md:h-96 rounded-t-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -300 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={project.images[currentImageIndex]}
                      alt={`${project.title} - Image ${currentImageIndex + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all duration-300 z-10"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all duration-300 z-10"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </>
                )}

                {/* Image Indicators */}
                {project.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentImageIndex
                            ? "bg-white shadow-lg"
                            : "bg-white bg-opacity-50 hover:bg-opacity-75"
                        }`}
                      />
                    ))}
                  </div>
                )}

                {/* Image Counter */}
                <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm z-10">
                  {currentImageIndex + 1} / {project.images.length}
                </div>
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

                {/* Image Gallery Preview */}
                {project.images.length > 1 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Project Gallery
                    </h3>
                    <div className="grid grid-cols-4 gap-2">
                      {project.images.map((image, index) => (
                        <motion.button
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                            index === currentImageIndex
                              ? "border-blue-500 ring-2 ring-blue-200 dark:ring-blue-800"
                              : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                          }`}
                        >
                          <Image
                            src={image}
                            alt={`${project.title} - Thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

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
