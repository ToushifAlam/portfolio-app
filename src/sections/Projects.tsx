import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
    const projectsData = [
        {
          image: "/project3.png",
          projectName: "Envest",
          projectLink: "https://envest-app.vercel.app/",
          projectDescription:
            "A sleek, full-stack stock insights platform offering curated financial news, smart portfolio input, and mock AI-based analysis. Designed with custom styling and deployed on Vercel for blazing-fast performance.",
          projectTech: [
            "Next.js",
            "React",
            "TypeScript",
            "CSS Modules",
            "Mock APIs",
          ],
          projectExternalLinks: {
            github: "https://github.com/ToushifAlam/envest-app",
            externalLink: "https://envest-app.vercel.app/",
          },
        },
        {
          image: "/project2.png",
          projectName: "Chatify",
          projectLink: "https://messaging-services.onrender.com/",
          projectDescription:
            "A full-stack real-time messaging app with 1:1 and group chats. Built using the MERN stack and Socket.io, featuring authentication, message search, and user profile support.",
          projectTech: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Socket.io",
            "Tailwind",
          ],
          projectExternalLinks: {
            github: "https://github.com/ToushifAlam/Chatify",
            externalLink: "https://messaging-services.onrender.com/",
          },
        },
        {
          image: "/project1.png",
          projectName: "WanderLust",
          projectLink: "https://wanderlust-a1zn.onrender.com/listings",
          projectDescription:
            "A hotel discovery platform that enables users to explore, review, and list hotels globally. Features include filtering, authentication, and interactive maps for smooth navigation.",
          projectTech: [
            "EJS",
            "Node.js",
            "Express",
            "MongoDB",
            "Context API",
            "PWA Concepts",
          ],
          projectExternalLinks: {
            github: "https://github.com/ToushifAlam/wander-lust",
            externalLink: "https://wanderlust-a1zn.onrender.com/listings",
          },
        },
      ];
      

  return (
    <div className="projects" id="work">
      <motion.div 
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I&apos;ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div 
                className="project" 
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  )
}

export default Projects;
