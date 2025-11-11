"use client"

import { motion } from "framer-motion"
import { SectionTitle } from "@/components/ui/section-title"

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React.js", "TypeScript", "JavaScript", "Tailwind CSS", "Next.js", "Responsive Design"],
    icon: "🎨",
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST API", "GraphQL", "Authentication", "Server Architecture"],
    icon: "⚙️",
  },
  {
    category: "Database",
    skills: ["MongoDB", "MySQL", "Data Modeling", "Query Optimization", "Schema Design"],
    icon: "🗄️",
  },
  {
    category: "Mobile",
    skills: ["React Native", "Cross-platform", "Mobile UI", "Performance", "Native APIs"],
    icon: "📱",
  },
]

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Technical Skills" subtitle="Technologies and tools I work with" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6 md:gap-8 mt-12"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
              className="group p-8 rounded-xl border border-secondary/50 hover:border-accent/50 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:bg-secondary/30"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">{category.icon}</span>
                <h3 className="text-xl font-bold group-hover:text-accent transition-colors">{category.category}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-sm font-medium text-accent hover:bg-accent/20 hover:border-accent/50 cursor-pointer transition-all"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                className="mt-6 h-1 bg-gradient-to-r from-accent to-accent/30 rounded-full origin-left"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 p-8 rounded-xl border border-secondary/50 bg-background/50 backdrop-blur-sm"
        >
          <h3 className="text-lg font-bold mb-6">Tech Stack Proficiency</h3>
          <div className="space-y-4">
            {[
              { tech: "React & Modern JavaScript", level: 95 },
              { tech: "Node.js & Express", level: 90 },
              { tech: "Database Design (SQL & NoSQL)", level: 85 },
              { tech: "Full-Stack Architecture", level: 88 },
              { tech: "React Native & Mobile", level: 80 },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">{item.tech}</span>
                  <span className="text-xs text-muted-foreground">{item.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-secondary/30 overflow-hidden">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-accent to-accent/60 origin-left"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
