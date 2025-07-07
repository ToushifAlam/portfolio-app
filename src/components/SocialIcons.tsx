import React from "react";
import {
    FiGithub,
    FiMail,
    FiLinkedin,
    FiInstagram,
} from "react-icons/fi";
import { SiLeetcode } from "react-icons/si"
//import InstituteLogo from "./InstituteLogo";
import Link from "next/link";
import { motion } from "framer-motion";

function SocialIcons() {
    const socialLinks = [
        {
            name: "Github",
            icon: <FiGithub />,
            link: "https://github.com/ToushifAlam"
        },
        {
            name: "Mail",
            icon: <FiMail />,
            link: "mailto:mdtoushif10@gmail.com"
        },
        {
            name: "LinkedIn",
            icon: <FiLinkedin />,
            link: "https://www.linkedin.com/in/toushifalam/"
        },
        {
            name: "LeetCode",
            icon: <SiLeetcode />,
            link: "https://leetcode.com/u/toushif_iit1821/",
        },
        {
            name: "Instagram",
            icon: <FiInstagram />,
            link: "https://www.instagram.com/toushifalam.1821/"
        },
        /*{
            name: "Institute",
            icon: <InstituteLogo />,
            link: "https://www.iitism.ac.in/",
        },*/
    ];

  return (
    <motion.div 
      className="social-icons"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <ul className="social-icons-list">
        {
            socialLinks.map(({name,icon,link}) => (
                <li key={name} title={name} className="social-icons-list-item">
                    <Link href={link} className="social-icons-list-item-link" target="_blank">{icon}</Link>
                </li>
            ))
        }
      </ul>
    </motion.div>
  )
}

export default SocialIcons;
