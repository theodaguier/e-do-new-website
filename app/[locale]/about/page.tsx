"use client";

import { motion, AnimatePresence } from "framer-motion";

function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, delay: 0.5, ease: "easeInOut" },
    },
  };

  const imageVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, delay: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <motion.h1 variants={textVariants} className="text-6xl antialiased">
          About
        </motion.h1>
        <motion.div className="flex">
          <motion.div className="flex flex-col flex-1">
            <motion.h2 variants={textVariants} className="text-2xl antialiased">
              one
            </motion.h2>
            <motion.p variants={textVariants} className="text-xs antialiased">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              feugiat, nisl nec pretium cursus, nunc quam finibus diam, vitae
              bibendum nunc velit in elit. Donec in elit eget elit aliquam
              rhoncus. Sed id lectus eget eros aliquet tincidunt. Sed
              ullamcorper, nunc id aliquet ultrices, nunc ipsum ullamcorper
              libero, eu aliquam nisl nisl vitae leo. Sed elementum, nisl quis
              maximus faucibus, odio odio aliquam nibh, id placerat magna nunc
              eu libero. Donec in elit eget elit aliquam rhoncus. Sed id lectus
              eget eros aliquet tincidunt. Sed ullamcorper, nunc id aliquet
              ultrices, nunc ipsum ullamcorper libero, eu aliquam nisl nisl
              vitae leo. Sed elementum, nisl quis maximus faucibus, odio odio
              aliquam nibh, id placerat magna nunc eu libero.
            </motion.p>
          </motion.div>
          <motion.div className="flex flex-col flex-1">
            <motion.h2 variants={textVariants} className="text-2xl antialiased">
              two
            </motion.h2>
            <motion.p variants={textVariants} className="text-xs antialiased">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              feugiat, nisl nec pretium cursus, nunc quam finibus diam, vitae
              bibendum nunc velit in elit. Donec in elit eget elit aliquam
              rhoncus. Sed id lectus eget eros aliquet tincidunt. Sed
              ullamcorper, nunc id aliquet ultrices, nunc ipsum ullamcorper
              libero, eu aliquam nisl nisl vitae leo. Sed elementum, nisl quis
              maximus faucibus, odio odio aliquam nibh, id placerat magna nunc
              eu libero. Donec in elit eget elit aliquam rhoncus. Sed id lectus
              eget eros aliquet tincidunt. Sed ullamcorper, nunc id aliquet
              ultrices, nunc ipsum ullamcorper libero, eu aliquam nisl nisl
              vitae leo. Sed elementum, nisl quis maximus faucibus, odio odio
              aliquam nibh, id placerat magna nunc eu libero.
            </motion.p>
          </motion.div>
          <motion.div className="flex flex-col flex-1">
            <motion.h2 variants={textVariants} className="text-2xl antialiased">
              three
            </motion.h2>
            <motion.p variants={textVariants} className="text-xs antialiased">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              feugiat, nisl nec pretium cursus, nunc quam finibus diam, vitae
              bibendum nunc velit in elit. Donec in elit eget elit aliquam
              rhoncus. Sed id lectus eget eros aliquet tincidunt. Sed
              ullamcorper, nunc id aliquet ultrices, nunc ipsum ullamcorper
              libero, eu aliquam nisl nisl vitae leo. Sed elementum, nisl quis
              maximus faucibus, odio odio aliquam nibh, id placerat magna nunc
              eu libero. Donec in elit eget elit aliquam rhoncus. Sed id lectus
              eget eros aliquet tincidunt. Sed ullamcorper, nunc id aliquet
              ultrices, nunc ipsum ullamcorper libero, eu aliquam nisl nisl
              vitae leo. Sed elementum, nisl quis maximus faucibus, odio odio
              aliquam nibh, id placerat magna nunc eu libero.
            </motion.p>
          </motion.div>
          <motion.div className="flex flex-col flex-1">
            <motion.h2 variants={textVariants} className="text-2xl antialiased">
              four
            </motion.h2>
            <motion.p variants={textVariants} className="text-xs antialiased">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              feugiat, nisl nec pretium cursus, nunc quam finibus diam, vitae
              bibendum nunc velit in elit. Donec in elit eget elit aliquam
              rhoncus. Sed id lectus eget eros aliquet tincidunt. Sed
              ullamcorper, nunc id aliquet ultrices, nunc ipsum ullamcorper
              libero, eu aliquam nisl nisl vitae leo. Sed elementum, nisl quis
              maximus faucibus, odio odio aliquam nibh, id placerat magna nunc
              eu libero. Donec in elit eget elit aliquam rhoncus. Sed id lectus
              eget eros aliquet tincidunt. Sed ullamcorper, nunc id aliquet
              ultrices, nunc ipsum ullamcorper libero, eu aliquam nisl nisl
              vitae leo. Sed elementum, nisl quis maximus faucibus, odio odio
              aliquam nibh, id placerat magna nunc eu libero.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default AboutPage;
