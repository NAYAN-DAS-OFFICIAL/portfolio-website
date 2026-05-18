"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden bg-linear-to-br from-white via-gray-100 to-gray-200"
    >

      {/* Animated Background Blobs */}

      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      {/* Hero Card */}

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{
          rotateX: 8,
          rotateY: -8,
          scale: 1.03,
        }}
        className="relative z-10 text-center bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/40 dark:border-slate-700 shadow-2xl rounded-3xl p-12 transition-all duration-300"

        style={{
          transformStyle: "preserve-3d",
        }}
      >

        <h1 className="text-6xl font-bold mb-6 text-black dark:text-white">
          Hi, I&apos;m Nayan Das 👋
        </h1>

        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
          Full Stack Developer passionate about building
          scalable modern web & mobile applications and startup products.
        </p>

        <a
            href="#projects"
            className="inline-block mt-8 px-8 py-3 bg-black text-white rounded-xl hover:opacity-80 transition"
            >
            View Projects
        </a>

      </motion.div>

    </section>
  );
}