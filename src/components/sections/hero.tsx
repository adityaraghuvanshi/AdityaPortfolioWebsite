"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 overflow-hidden pt-20 md:pt-0">
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-accent/10 opacity-50"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl mx-auto z-10"
      >
        <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} className="flex justify-center mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Full-Stack Developer</span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center mb-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight mb-4">
            <motion.span
              className="inline-block bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% center", "200% center"],
              }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
            >
              Crafting Digital Experiences
            </motion.span>{" "}
            <br />
            <span className="text-accent">with Clean Code</span>
          </h1>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          I transform ideas into robust, scalable web applications. 2 years of experience building full-stack solutions
          with React, Node.js, and modern technologies. Let's build something amazing together.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-4 justify-center items-center flex-wrap"
        >
          <motion.button
            onClick={() => {
              const element = document.getElementById("projects");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg bg-accent text-accent-foreground font-semibold flex items-center gap-2 transition-all hover:shadow-lg hover:shadow-accent/50"
          >
            View My Work
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          <motion.button
            onClick={() => {
              const element = document.getElementById("contact");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg border border-accent/50 hover:border-accent hover:bg-accent/5 font-semibold transition-all"
          >
            Get in Touch
          </motion.button>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          {[
            { label: "2+ Years", value: "Experience" },
            { label: "10+", value: "Projects" },
            { label: "5", value: "Tech Stacks" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              className="p-4 rounded-lg bg-secondary/30 border border-secondary/50 backdrop-blur-sm text-center hover:border-accent/50 transition-all"
            >
              <div className="text-xl md:text-2xl font-bold text-accent">{stat.label}</div>
              <div className="text-xs md:text-sm text-muted-foreground">{stat.value}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground"
      >
        <div className="text-xs mb-2">Scroll to explore</div>
        <motion.div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center p-2">
          <motion.div className="w-1 h-2 bg-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
