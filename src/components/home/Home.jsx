// Write all the code here

import React from "react";
import { motion } from "framer-motion";
import Founder from "./Founder";
import Menu from "./Menu";
const options = {
    initial: {
        x: "-100%",
        opacity: 0,
    },
    whileInView: {
        x: 0,
        opacity: 1,
    }
};

const Home = () => {
  return (
    <motion.div
      className="home"
      initial={options.initial}
      whileInView={options.whileInView}
    >
      {/* Your Home component content */}
      <Founder />
      <Menu />
    </motion.div>
  );
};

export default Home;