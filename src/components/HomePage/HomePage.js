import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Button from "../Button/Button";
import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      <div className="content">
        <h3>Frontend Web Developer</h3>
        <p>Based in South-East London</p>
        <Link to="/james-debnam-cv.pdf" target="_blank" download>
          <Button text="My CV" />
        </Link>
        <Link to="/projects">
          <Button text="My Projects" />
        </Link>
      </div>
      <motion.div
        animate={{ skewX: 180 }}
        style={{ originX: 0 }}
        transition={{ duration: 70, loop: Infinity }}
        className="background"
      ></motion.div>
      <motion.div
        animate={{ skewX: -180 }}
        style={{ originX: 0 }}
        transition={{ duration: 70, loop: Infinity }}
        className="background"
      ></motion.div>
    </>
  );
}
