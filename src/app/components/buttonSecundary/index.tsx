"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  bgTransparent: boolean;
  onclick: () => void;
  type?: "button" | "submit";
};

export default function ButtonSecundary({
  children,
  bgTransparent,
  onclick,
  type,
}: Props) {
  return (
    <motion.button
      type={type}
      onClick={() => onclick()}
      className={`border-2  ${
        bgTransparent
          ? "bg-transparent border-emerald-600 text-emerald-600"
          : "bg-emerald-600 border-emerald-600 text-neutral-50"
      } px-4 py-2 rounded-xl shadow-lg mt-4 w-full cursor-pointer`}
      whileHover={{ scale: 0.98 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 150 }}
    >
      {children}
    </motion.button>
  );
}
