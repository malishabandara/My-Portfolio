import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import web_mobile from "./web_mobile.png";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  web_mobile,
};

export const workData = [
  {
    id: 1,
    title: "Fitness Mobile App",
    description: "Mobile App",
    bgImage: "/work-1.png",
    images: ["/work-1.png", "/work-2.png", "/work-3.png", "/work-4.png"],
    category: "Mobile Development",
    technologies: ["React Native", "Firebase", "Redux"],
    details:
      "A comprehensive fitness tracking application with personalized workout plans, nutrition tracking, and social features. Built with React Native for cross-platform compatibility.",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Health Center",
    description: "Web Application",
    bgImage: "/work-2.png",
    images: ["/work-2.png", "/work-1.png", "/work-4.png", "/work-3.png"],
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB"],
    details:
      "A complete healthcare management system featuring appointment booking, patient records management, and telemedicine capabilities. Designed to streamline medical operations.",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Photography Portfolio",
    description: "Web Design",
    bgImage: "/work-3.png",
    images: ["/work-3.png", "/work-4.png", "/work-1.png", "/work-2.png"],
    category: "UI/UX Design",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    details:
      "An elegant photography portfolio website with smooth animations, gallery management, and responsive design. Features advanced image optimization and lazy loading.",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Garbage Detection System",
    description: "AI Research",
    bgImage: "/work-4.png",
    images: ["/work-4.png", "/work-3.png", "/work-2.png", "/work-1.png"],
    category: "Machine Learning",
    technologies: ["Python", "TensorFlow", "OpenCV"],
    details:
      "An AI-powered waste classification system using computer vision to automatically detect and categorize different types of garbage for efficient recycling processes.",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "E-Commerce Platform",
    description: "Full Stack App",
    bgImage: "/work-1.png",
    images: ["/work-1.png", "/work-3.png", "/work-4.png", "/work-2.png"],
    category: "Web Development",
    technologies: ["Next.js", "Stripe", "PostgreSQL"],
    details:
      "A modern e-commerce platform with advanced features including real-time inventory management, secure payment processing, and admin dashboard with analytics.",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Task Management App",
    description: "Productivity Tool",
    bgImage: "/work-2.png",
    images: ["/work-2.png", "/work-4.png", "/work-1.png", "/work-3.png"],
    category: "Mobile Development",
    technologies: ["React Native", "Redux", "SQLite"],
    details:
      "A powerful task management application with team collaboration features, deadline tracking, and productivity analytics. Includes offline functionality and data synchronization.",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 7,
    title: "Social Media Dashboard",
    description: "Analytics Platform",
    bgImage: "/work-3.png",
    images: ["/work-3.png", "/work-1.png", "/work-2.png", "/work-4.png"],
    category: "Web Development",
    technologies: ["React", "D3.js", "Node.js"],
    details:
      "A comprehensive social media analytics dashboard providing insights across multiple platforms with real-time data visualization and automated reporting features.",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    bgImage: assets.web_mobile,
    title: "Web & Mobile App Development",
    description:
      "Custom-built, responsive websites and mobile applications using React, Next.js, and React Native.",
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "Database & Backend Solutions",
    description: [
      "Database design and management (MySQL, PostgreSQL, Supabase)",
      "API development and backend integration",
      "Authentication systems (Google, Facebook, Firebase Auth)",
    ],
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "UI/UX design",
    description:
      "Creating user-friendly, visually appealing interfaces with Figma and Adobe XD.",
    link: "",
  },
  {
    icon: assets.graphics_icon,
    title: "Graphics design",
    description: [
      "Logo design, flyer design, and business cards",
      "Logo animation and motion graphics",
      "Social media posts and marketing materials",
    ],
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "HTML, CSS, JavaScript React Js, Next Js",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "Bsc (Hons) in Computer Science - University of Jaffna",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];
