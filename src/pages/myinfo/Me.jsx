import React from "react";
import { motion } from "framer-motion";
import useTitle from "../../hooks/useTitle";
import { FaHtml5, FaCss3Alt, FaPhp, FaNode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { DiMongodb, DiJqueryLogo } from "react-icons/di";

const Me = () => {
  useTitle("About Me");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="about"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="about-title">About Me</div>
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="education" variants={itemVariants}>
          <h1>Sonargoan University (2020 - 2024)</h1>
          <h2>BSC in Computer Science and Engineering</h2>
        </motion.div>
        <motion.div className="contact-info" variants={itemVariants}>
          <h3>01724707680</h3>
          <h3>rabbyshek1998@gmail.com</h3>
        </motion.div>
        <motion.div className="skills" variants={itemVariants}>
          <ul>
            <li style={{ color: "#E44D26" }}>
              {" "}
              {/* HTML5 color */}
              <FaHtml5 />
            </li>
            <li style={{ color: "#1572B6" }}>
              {" "}
              {/* CSS3 color */}
              <FaCss3Alt />
            </li>
            <li style={{ color: "#F7DF1E" }}>
              {" "}
              {/* JavaScript color */}
              <IoLogoJavascript />
            </li>
            <li style={{ color: "#777BB4" }}>
              {" "}
              {/* PHP color */}
              <FaPhp />
            </li>
            <li style={{ color: "#00758F" }}>
              {" "}
              {/* MySQL color */}
              <SiMysql />
            </li>
            <li style={{ color: "#68A063" }}>
              {" "}
              {/* Node.js color */}
              <FaNode />
            </li>
            <li style={{ color: "#589636" }}>
              {" "}
              {/* MongoDB color */}
              <DiMongodb />
            </li>
            <li style={{ color: "#0769AD" }}>
              {" "}
              {/* jQuery color */}
              <DiJqueryLogo />
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Me;
