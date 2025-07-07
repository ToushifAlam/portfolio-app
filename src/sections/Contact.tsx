import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div 
      className="contact" 
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">What&apos;s Next?</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
        I&apos;m currently open to freelance projects, internships, and collaborative opportunities. 
        If you have something in mind or just want to connect, feel free to drop a message—I'll respond as soon as I can!
      </p>
      <div className="contact-cta">
        <Button link="mailto:mdtoushif10@gmail.com" text="Say Hello" />
      </div>
    </motion.div>
  )
}

export default Contact;
