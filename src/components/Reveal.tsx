import { motion } from "framer-motion";

import { transition } from "../utils/transition";

import { FC, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
}

const Reveal: FC<RevealProps> = ({ children }) => {
  return <div>Reveal</div>;
};

export default Reveal;
