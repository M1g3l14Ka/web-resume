import TileBackground from "@/components/TileBackground";
import { headerTiles, workTimelineData } from "@/data/data";
import { ITimelineItem } from "@/types";
import { Download, Briefcase, Code2, Heart, Zap } from "lucide-react";

const skills = [
  { name: "Next.js / React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Node.js / Express", level: 80 },
  { name: "Prisma ORM", level: 75 },
  { name: "PostgreSQL / SQLite", level: 70 },
  { name: "Docker", level: 65 },
  { name: "Framer Motion", level: 85 },
];

const values = [
  { icon: <Zap className="w-6 h-6" />, title: "Speed", desc: "Optimized code, fast loading, SSR/SSG where it matters." },
  { icon: <Code2 className="w-6 h-6" />, title: "Clean Code", desc: "TypeScript, typing, reusable components, SOLID principles." },
  { icon: <Heart className="w-6 h-6" />, title: "Passion", desc: "Every project is personal. Animations, UX, attention to detail." },
  { icon: <Briefcase className="w-6 h-6" />, title: "Reliability", desc: "Deadlines are law. Communication is transparent, results are predictable." },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <TileBackground headerTiles={headerTiles} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-mono font-bold mb-4">
            About <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-rose-600">Me</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Frontend/FullStack developer from Russia. Building modern web applications with passion.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <a
              href="/cv/en/Michael_Frontend_Developer.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-orange-400 to-rose-600 rounded-xl font-mono text-white hover:scale-105 transition-transform"
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
        </div>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-mono mb-8 text-center">
            <span className="text-purple-500">#</span> Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="flex justify-between mb-2">
                  <span className="font-mono text-sm">{skill.name}</span>
                  <span className="font-mono text-sm text-purple-400">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-linear-to-r from-orange-400 to-rose-600 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-mono mb-8 text-center">
            <span className="text-purple-500">#</span> Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-colors"
              >
                <div className="text-purple-400 mb-3">{value.icon}</div>
                <h3 className="font-mono text-lg mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="text-3xl font-mono mb-8 text-center">
            <span className="text-purple-500">#</span> Work Experience
          </h2>
          <div className="space-y-6">
            {workTimelineData.map((item: ITimelineItem) => (
              <div
                key={item.id}
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
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
