"use client";

import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { StoreContext } from "../context";

import Home from "../components/about/Home";
import Project from "../components/project/Project";
import Exp from "../components/exp/Exp";
import ContactForm from "../components/contact/ContactForm";

const pages = [
  { index: 0, component: <Home /> },
  { index: 1, component: <Project /> },
  { index: 2, component: <Exp /> },
  { index: 3, component: <ContactForm /> },
];

const slideVariants = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -100, opacity: 0 },
};

const PageBody = () => {
  const { currentPage } = useContext(StoreContext);

  const page = pages.find((p) => p.index === currentPage?.index);
  console.log(page);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentPage?.index}
        variants={slideVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute w-full"
      >
        {page?.component}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageBody;
