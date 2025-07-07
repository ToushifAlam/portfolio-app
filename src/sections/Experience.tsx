import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Experience() {
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        const transformSelected = () => {
          const underline = document.querySelector<HTMLElement>(".underline");
          underline!.style.top = `${selected * 2.5}rem`;
        };
        transformSelected();
    }, [selected]);

    const expereinces = [
        {
          name: "Outlier AI",
          role: "Freelance AI Model Trainer",
          url: "https://www.outlier.ai",
          start: "Jan 2025",
          end: "Present",
          shortDescription: [
            "Worked on AI training projects with a focus on enhancing model accuracy and precision.",
            "Processed and annotated datasets with over 95% precision, contributing to high-quality data pipelines.",
            "Helped optimize AI workflows by restructuring training data and improving efficiency by 25%.",
          ],
        },
        {
          name: "Envest",
          role: "Full Stack Developer",
          url: "https://envest-app.vercel.app/",
          start: "June 2025",
          end: "July 2025",
          shortDescription: [
            "Developed a stock news and portfolio insights platform with AI-based analysis.",
            "Built custom UI using CSS modules and deployed the app on Vercel for seamless performance.",
            "Simulated real-time stock analysis using mock data with controlled delays for realism.",
          ],
        },
        {
          name: "Electronics & IoT Club",
          role: "Club Member",
          url: "https://www.iitism.ac.in",
          start: "September 2023",
          end: "May 2024",
          shortDescription: [
            "Contributed to hands-on IoT and electronics projects involving sensors and microcontrollers.",
            "Participated in workshops and technical discussions to deepen domain knowledge.",
          ],
        },
        {
          name: "Udaan Club",
          role: "Co-Head, Design",
          url: "https://www.iitism.ac.in",
          start: "March 2023",
          end: "March 2024",
          shortDescription: [
            "Led the design division for Udaan, the annual social fest of IIT(ISM) Dhanbad.",
            "Created digital content and collaborated with event teams to maintain consistent branding.",
            "Managed design assets and visuals for campaigns, workshops, and promotional drives.",
          ],
        },
        {
          name: "WanderLust",
          role: "MERN Stack Developer",
          url: "https://wanderlust-a1zn.onrender.com/listings",
          start: "October 2023",
          end: "December 2023",
          shortDescription: [
            "Built a full-stack travel platform featuring global hotel listings, reviews, and interactive maps.",
            "Implemented user authentication, filtering, and dynamic rendering for improved user experience.",
            "Optimized database queries and UI rendering for a smoother browsing experience.",
          ],
        },
      ];
      
  return (
    <motion.div 
      className="experience" 
      id="experience"
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
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Experience;
