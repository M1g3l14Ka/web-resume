'use client';

import TileBackground from "@/components/TileBackground";
import { headerTiles, workTimelineData, skills, values } from "@/data/data";
import { ITimelineItem } from "@/types";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <TileBackground headerTiles={headerTiles} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-mono font-bold mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-600">Me</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Frontend/FullStack developer from Russia. Building modern web applications with passion.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <a
              href="/cv/en/Michael_Frontend_Developer.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-400 to-rose-600 rounded-xl font-mono text-white hover:scale-105 transition-transform"
            >
              <Download className="w-5 h-5" />
              Download CV (EN)
            </a>
            <a
              href="/cv/ru/Mikhail_Frontend_Developer.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl font-mono text-white hover:border-purple-500/30 hover:scale-105 transition-all"
            >
              <Download className="w-5 h-5" />
              Скачать CV (RU)
            </a>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.section
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariant}
        >
          <motion.h2 variants={itemVariant} className="text-3xl font-mono mb-8 text-center">
            <span className="text-purple-500">#</span> Skills
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <motion.div key={skill.name} variants={itemVariant} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="flex justify-between mb-2">
                  <span className="font-mono text-sm">{skill.name}</span>
                  <span className="font-mono text-sm text-purple-400">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-orange-400 to-rose-600 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariant}
        >
          <motion.h2 variants={itemVariant} className="text-3xl font-mono mb-8 text-center">
            <span className="text-purple-500">#</span> Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={itemVariant}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-colors"
              >
                <div className="text-purple-400 mb-3">{value.icon}</div>
                <h3 className="font-mono text-lg mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariant}
        >
          <motion.h2 variants={itemVariant} className="text-3xl font-mono mb-8 text-center">
            <span className="text-purple-500">#</span> Work Experience
          </motion.h2>
          <div className="space-y-6">
            {workTimelineData.map((item: ITimelineItem) => (
              <motion.div
                key={item.id}
                variants={itemVariant}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h3 className="font-mono text-lg text-white">{item.title}</h3>
                    <p className="text-purple-400 text-sm">{item.subtitle}</p>
                  </div>
                  <span className="text-gray-500 text-sm font-mono">{item.date}</span>
                </div>
                <p className="text-gray-400 text-sm mt-3">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
