import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Loader({ isLoading, setIsLoading }: any) {
    useEffect(() => {
        setTimeout(() => {
          setIsLoading();
        }, 1900);
    }, [setIsLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader"
          key="loader"
          exit={{ scale: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.svg
            id="logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ scale: 2, opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <g>
              <motion.path
                d="M 50,5
                   L 11,27
                   L 11,72
                   L 50,95
                   L 89,73
                   L 89,28 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
              />
              <motion.text
                x="50"
                y="62"
                textAnchor="middle"
                fontSize="40"
                fill="currentColor"
                fontFamily="Arial, sans-serif"
                fontWeight="bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                T
              </motion.text>
            </g>
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;