import { motion } from 'framer-motion'

const projects = [
  {
    name: 'Park Spotter',
    tagline: 'Smart Parking Management Platform',
    description:
      'A full-stack parking management platform enabling real-time availability tracking and intelligent location-based search across 200+ parking locations.',
    tech: ['ASP.NET Core', 'MySQL', 'JWT', 'REST API'],
    highlights: [
      '15+ secure RESTful APIs with Role-Based Access Control (RBAC)',
      'Real-time parking availability tracking for 200+ locations',
      '40% faster location-based search using optimized spatial queries',
      'JWT authentication with separate flows for end users and administrators',
    ],
    githubUrl: '#',
    status: 'Completed',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-[#0d1526]">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-white mb-3"
          >
            Projects
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-20 bg-[#00d4ff] mx-auto rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-3xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-[#0a0f1e] border border-white/8 rounded-2xl overflow-hidden hover:border-[#00d4ff]/30 transition-all duration-400 hover:shadow-2xl hover:shadow-[#00d4ff]/5"
            >
              {/* Card header accent */}
              <div className="h-1 bg-gradient-to-r from-[#00d4ff] to-blue-500" />

              <div className="p-8">
                {/* Top row */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="text-xs font-mono text-[#00d4ff] uppercase tracking-widest">
                      Featured Project
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-[#00d4ff] transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-gray-500 text-sm mt-0.5">{project.tagline}</p>
                  </div>
                  <span className="shrink-0 px-2.5 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs rounded-full font-medium">
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-400 leading-relaxed mb-6">{project.description}</p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((h, j) => (
                    <li key={j} className="flex gap-3 text-gray-400 text-sm">
                      <span className="text-[#00d4ff] shrink-0 font-mono">▹</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-[#00d4ff]/8 text-[#00d4ff] border border-[#00d4ff]/20 rounded-full text-xs font-medium font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
