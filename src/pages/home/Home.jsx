import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Typewriter from "typewriter-effect";
const Home = () => {
  useTitle("Home");
  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Adjust the stagger duration as needed
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const name = "MD Rabby Shek Suvo";

  return (
    <motion.div
      className="home"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={parentVariants}
    >
      <motion.div className="home-content" variants={parentVariants}>
        {name.split("").map((letter, index) => (
          <motion.span key={index} className="name" variants={childVariants}>
            {letter}
          </motion.span>
        ))}
        <motion.div
          className="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          I am a{" "}
          <span
            style={{
              color: "black",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              background: "transparent",
            }}
          >
            <Typewriter
              options={{
                strings: ["ReactJS", "JavaScript", "NodeJS"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>{" "}
          Developer
          <div className="social-links">
            <ul>
              <li>
                <NavLink
                  to="https://www.linkedin.com/in/md-rabby-shek-suvo-1739aa224/"
                  target="_blank"
                >
                  <FaLinkedin className="linkedin" />
                </NavLink>
              </li>
              <li>
                <NavLink to="https://github.com/rabby-shek" target="_blank">
                  <FaGithubSquare className="github" />
                </NavLink>
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
