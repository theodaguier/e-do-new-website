import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function TurningText(children: React.ReactNode) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ ease: "easeInOut" }}
        style={{ position: "absolute" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
