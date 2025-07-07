import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div 
      className="about" 
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            I'm MD Toushif Alam, a full-stack developer and Electronics student at IIT(ISM) Dhanbad, focused on creating scalable, user-centric web applications. I specialize in modern JavaScript frameworks, with a strong emphasis on clean architecture, performance, and continuous improvement.
          </p>
          <p className="about-grid-info-text">
            One of my featured works is&nbsp;
            <Link
              className="link"
              href="https://envest-app.vercel.app/"
              target="_blank"
            >
              Envest
            </Link>, a smart stock news and portfolio insight platform with curated feeds, dynamic portfolio inputs, and AI-based analysis.
          </p>

          <p className="about-grid-info-text">
            I also built&nbsp;
            <Link
              className="link"
              href="https://github.com/ToushifAlam/Chatify"
              target="_blank"
            >
              Chatify
            </Link>, a full-stack real-time messaging app supporting both 1:1 and group conversations. Built using the MERN stack and Socket.io.
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I&apos;ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">React Native</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Socket.io</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Express.js</li>
            <li className="about-grid-info-list-item">C++ / Python</li>
            <li className="about-grid-info-list-item">CSS</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/profile.png" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About;
