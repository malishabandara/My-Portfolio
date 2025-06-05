import { assets, serviceData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg"
      >
        What I Offer
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl"
      >
        My Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mb-12 max-w-2xl text-center mx-auto mt-5"
      >
        This is just the beginning of something extraordinary. In a world where
        technology evolves at lightning speed, relying on outdated solutions
        only slows us down. My mission? To transform complex challenges into
        innovative, efficient, and impactful solutions. Whether it's web and
        mobile development, AI-driven automation, or cybersecurity tools, I
        strive to build smarter, faster, and better—together with you.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-auto gap-6 my-10"
      >
        {serviceData.map(
          ({ icon, title, description, link, bgImage }, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={index}
              className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkTheme dark:hover:shadow-white"
            >
              <Image src={icon} alt="" className="w-10" />
              <h3 className="text-lg my-2 text-gray-700 dark:text-white">
                {title}
              </h3>
              <ul className="text-sm text-gray-600 leading-5 dark:text-white/80">
                {Array.isArray(description) ? (
                  description.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))
                ) : (
                  <li>{description}</li>
                )}
              </ul>

              <Link
                href={link}
                className="flex items-center gap-2 text-sm mt-5"
              >
                Read more{" "}
                <Image src={assets.right_arrow} className="w-4" alt="" />
              </Link>
            </motion.div>
          )
        )}
      </motion.div>
    </motion.div>
  );
}

export default Services;
